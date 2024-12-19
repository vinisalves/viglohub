import { BadRequestException, Body, Controller, Post, Redirect, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/login.dto';
import { SignUpDto } from './dtos/signup.dto';
import { CustomI18nService } from '../i18n/i18n.service';
import { Response } from 'express';
import { SignUpPartnerDto } from './dtos/signup-partner.dto';
import { Public } from '../../decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly i18n: CustomI18nService,
  ) {}

  @Public()
  @Post('signup')
  async signup(@Body() sidnupDto: SignUpDto) {
    try {
      const newUser = await this.authService.signup(sidnupDto);

      if (newUser) return newUser;

      throw new Error(this.i18n.t('auth.validations.signup_failed'));
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Public()
  @Post('login')
  async login(@Req() req, @Body() loginDto: LoginDto) {
    try {
      const { JwtCookie, JwtRefreshCookie, user } = await this.authService.userLogin(
        loginDto.email,
        loginDto.password,
      );

      req.res.setHeader('Set-Cookie', [JwtCookie, JwtRefreshCookie]);
      return {
        email: user.email,
      };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Post('logout')
  logout() {}
}
