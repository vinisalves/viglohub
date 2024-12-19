import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { PartnersModule } from '../partners/partners.module';

@Module({
  imports: [
    UsersModule,
    PartnersModule,
    JwtModule.registerAsync({
      global: true,

      useFactory: async () => ({
        secret: process.env.SECRET_JWT,
        signOptions: {
          expiresIn: process.env.SECRECT_JWT_EXPIRATION_TIME,
        },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
