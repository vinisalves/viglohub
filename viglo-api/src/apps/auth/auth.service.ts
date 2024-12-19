import { Injectable, Redirect } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { CustomI18nService } from '../i18n/i18n.service';
import { SignUpDto } from './dtos/signup.dto';
import { PaymentGatewayService } from '../payment-gateway/payment-gateway.service';
import { PartnersService } from '../partners/partners.service';
import { UserEntity } from '../users/entities/user.entity';
import { SignUpPartnerDto } from './dtos/signup-partner.dto';
import { PartnerEntity } from '../partners/entities/partner.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
    private readonly partnersService: PartnersService,
    private readonly i18n: CustomI18nService,
    private readonly paymentGatewayService: PaymentGatewayService,
  ) {}

  /**
   * Singup a user
   * If singup comes from a partner automatically make user
   * follow the partner
   * @param singUpDto
   * @returns Promise<boolean | Error>
   */
  async signup(singUpDto: SignUpDto): Promise<string | Error> {
    const alreadyExists = await this.usersService.findByEmail(singUpDto.email);
    if (alreadyExists)
      throw new Error(
        this.i18n.t('auth.validations.already_exists', {
          args: { email: singUpDto.email },
        }),
      );

    const userFromDb = await this.usersService.create(singUpDto);

    if (!userFromDb) new Error(this.i18n.t('auth.validations.signup_failed'));

    const paymentUser = {
      name: 'Missing name yet',
      email: singUpDto.email,
      metadata: {
        user_id: userFromDb.id,
      },
    };

    const gatewayUser = await this.paymentGatewayService.createCustomer(paymentUser);

    // set gatewayuser Id
    await this.usersService.update(userFromDb.id, {
      user_gateway_id: gatewayUser.id,
    });

    // Referal follow
    if (singUpDto.partner_id) {
      this.usersService.followPartner(userFromDb, singUpDto.partner_id);
    }

    return userFromDb.id;
  }

  /**
   * Login a user and return tokens session
   * throught cookies
   */
  async userLogin(
    userEmail: string,
    pass: string,
  ): Promise<{
    user: UserEntity;
    JwtCookie: string;
    JwtRefreshCookie: string;
  }> {
    const userFromDb = await this.usersService.findByEmail(userEmail);
    if (!userFromDb) throw new Error(this.i18n.t('auth.validations.user_or_password_not_found'));

    const isPassCorrect = userFromDb.checkPassword(pass);

    if (isPassCorrect) {
      const JwtCookie = this.getCookieWithJwtAccessToken(userFromDb.id);
      const { JwtRefreshCookie, jwtRefreshToken } = this.getCookieWithJwtRefreshToken(userFromDb.id);

      this.usersService.setCurrentRefreshToken(userFromDb.id, jwtRefreshToken);

      /** never deliver password to frontend */
      delete userFromDb.password;

      return {
        user: userFromDb,
        JwtCookie: JwtCookie,
        JwtRefreshCookie,
      };
    }
    throw new Error(this.i18n.t('auth.validations.user_or_password_not_found'));
  }

  /**
   * Logout a user
   * @param user
   * @returns Promise<[string, String]>
   */
  async logout(user: UserEntity): Promise<[string, String]> {
    await this.usersService.removeRefreshToken(user.id);
    return this.getCookiesForLogOut();
  }

  /**
   * Return a cookie for sessio controll
   * com HttpOnly setado como true
   * @param userId
   * @returns {string}
   */
  getCookieWithJwtAccessToken(userId: string): string {
    const payload = { userId };
    const token = this.jwtService.sign(payload, {
      secret: process.env.SECRET_JWT,
      expiresIn: process.env.SECRECT_JWT_EXPIRATION_TIME,
    });
    return `vg1=${token}; HttpOnly; Path=/; Max-Age=86400; `;
  }

  /**
   * Return a refresh cookie for session controll
   * com HttpOnly setado como true, também é retornado o token em si.
   * @param CurrentCompany
   * @param CuserId
   * @returns Promise<{{ cookie: string; token: string }}>
   */
  getCookieWithJwtRefreshToken(userId: string): {
    JwtRefreshCookie: string;
    jwtRefreshToken: string;
  } {
    const payload = { userId };

    const jwtRefreshToken = this.jwtService.sign(payload, {
      secret: process.env.SECRET_REFRESH_JWT,
      expiresIn: process.env.SECRET_REFRESH_JWT_EXPIRATION_TIME,
    });
    const JwtRefreshCookie = `vg2=${jwtRefreshToken}; HttpOnly; Path=/; Max-Age=172800; `;
    return {
      JwtRefreshCookie,
      jwtRefreshToken,
    };
  }

  /**
   * Clean cookies for logout
   * @returns {[string, String]}
   */
  getCookiesForLogOut(): [string, string] {
    return ['bv1=; HttpOnly; Path=/; Max-Age=0', 'bv2=; HttpOnly; Path=/; Max-Age=0'];
  }
}
