import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { UpdateUserDto } from './dtos/update-user.dto';

import { UserEntity } from './entities/user.entity';
import { compareHash, generateHash } from '../../utils/encryption';
import { PartnersService } from '../partners/partners.service';
import { CustomI18nService } from '../i18n/i18n.service';
import { FollowersService } from '../followers/followers.service';
import { FollowersEntity } from '../followers/entities/followers.entity';
import { SetUserProfileDto } from './dtos/set-user-profile.dto';
import { UserProfileEntity } from './entities/user-profile.entity';
import { SetUserSettingsDto } from './dtos/set-user-settings.dto';
import { UserSettingsEntity } from './entities/user-settings.entity';
import { PaymentGatewayService } from '../payment-gateway/payment-gateway.service';
import { UpdateCustomerDto } from '../payment-gateway/dtos/update-customer.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(UserProfileEntity)
    private readonly userProfileRepository: Repository<UserProfileEntity>,
    @InjectRepository(UserSettingsEntity)
    private readonly userSettingsRepository: Repository<UserSettingsEntity>,
    private readonly partnersService: PartnersService,
    private readonly i18n: CustomI18nService,
    @Inject(forwardRef(() => FollowersService))
    private readonly followService: FollowersService,
    private readonly paymentGatewayService: PaymentGatewayService,
  ) {}

  /**
   * Create a User
   * @param createUserDto
   * @returns Promise<UserEntity>
   */
  create(createUserDto: CreateUserDto): Promise<UserEntity> {
    const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser);
  }

  /**
   * Update a User
   * @param userId
   * @param updateUserDto
   * @returns Promise<UserEntity>
   */
  async update(userId: string, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    const userFromDb = await this.findById(userId);

    if (!userFromDb) throw new Error();

    const updateResult = await this.userRepository.update(userId, { ...updateUserDto });
    if (updateResult.affected > 0) return await this.findById(userId);
    throw new Error(this.i18n.t('partners.validations.not_found'));
  }

  /**
   * Find a user by Id
   * @param userId
   * @returns Promise<UserEntity>
   */
  findById(userId: string): Promise<UserEntity> {
    return this.userRepository.findOne({ where: { id: userId } });
  }

  /**
   * Find a User by Email
   * @param email
   * @returns Promise<UserEntity>
   */

  findByEmail(email: string): Promise<UserEntity> {
    return this.userRepository.findOneBy({ email });
  }

  /**
   * Retorna um usuário se refresh token
   * informado coincide com o refresh token
   * no banco de dados
   * @param refreshToken
   * @param userId
   * @returns {Promise<boolean> }
   */
  async getUserIfRefreshTokenMatches(refreshToken: string, userId: string): Promise<boolean> {
    const userFromDb = await this.findById(userId);
    if (!userFromDb) return false;

    return compareHash(refreshToken, userFromDb.refresh_token);
  }

  /**
   * Gera um novo refresh token para um
   * usuário
   * @param userId
   * @param refreshToken
   * @returns {Promise<UpdateResult>}
   */
  async setCurrentRefreshToken(userId: string, refreshToken: string): Promise<UpdateResult> {
    const hash = generateHash(refreshToken);

    return this.userRepository.update(userId, {
      refresh_token: hash,
    });
  }

  /**
   * Remove o refresh token from user for logout porpuses
   * @param userId
   * @returns {Promise<UpdateResult>}
   */
  removeRefreshToken(userId: string): Promise<UpdateResult> {
    return this.userRepository.update(userId, {
      refresh_token: null,
    });
  }

  /**
   * Follow a partner
   * @param user
   * @param partnerId
   * @returns Promise<FollowersEntity>
   */
  async followPartner(user: UserEntity, partnerId: string): Promise<FollowersEntity> {
    const partnerFromDb = await this.partnersService.findById(partnerId);
    if (!partnerFromDb) throw new Error(this.i18n.t('partners.validations.not_found'));
    return await this.followService.follow(user, partnerFromDb);
  }

  /**
   * Set a user Profile
   * @param user
   * @param setProfileDto
   * @returns
   */
  async setUserProfile(user: UserEntity, setProfileDto: SetUserProfileDto): Promise<UserProfileEntity> {
    const gatewayPayload: UpdateCustomerDto = {
      name: setProfileDto.first_name + ' ' + setProfileDto.last_name,
      phone: setProfileDto.phone,
      address: {
        line1: setProfileDto.street,
        line2: setProfileDto.complement,
        city: setProfileDto.city,
        state: setProfileDto.state,
        country: setProfileDto.country,
        postal_code: setProfileDto.postal_code,
      },
    };
    this.paymentGatewayService.updateCustomer(user.user_gateway_id, gatewayPayload);

    const userHasProfile = await this.userProfileRepository.findOne({
      where: {
        user: {
          id: user.id,
        },
      },
    });

    if (userHasProfile) {
      const updateResult = await this.userProfileRepository.update(userHasProfile.id, setProfileDto);
      if (updateResult.affected > 0) {
        return await this.userProfileRepository.findOne({
          where: {
            user: {
              id: user.id,
            },
          },
        });
      }

      throw new Error(this.i18n.t('users.validations.update_not_found'));
    }

    const setProfileObj = this.userProfileRepository.create({
      user,
      ...setProfileDto,
    });
    return this.userProfileRepository.save(setProfileObj);
  }

  async setUserSettings(user: UserEntity, setUserSettingsDto: SetUserSettingsDto): Promise<UserSettingsEntity> {
    const userHasSettings = await this.userSettingsRepository.findOne({
      where: {
        user: {
          id: user.id,
        },
      },
    });

    if (userHasSettings) {
      const updateResult = await this.userSettingsRepository.update(userHasSettings.id, setUserSettingsDto);

      if (updateResult.affected > 0) {
        return await this.userSettingsRepository.findOne({
          where: {
            user: {
              id: user.id,
            },
          },
        });
      }

      throw new Error(this.i18n.t('users.validations.update_not_found'));
    }

    const newUserSettings = this.userSettingsRepository.create({
      user,
      ...setUserSettingsDto,
    });
    return this.userSettingsRepository.save(newUserSettings);
  }
}
