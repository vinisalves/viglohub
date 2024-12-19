import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserEntity } from './entities/user.entity';
import { PartnersModule } from '../partners/partners.module';
import { FollowersModule } from '../followers/followers.module';
import { UserProfileEntity } from './entities/user-profile.entity';
import { UserSettingsEntity } from './entities/user-settings.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, UserProfileEntity, UserSettingsEntity]),
    PartnersModule,
    FollowersModule,
  ],
  controllers: [UsersController],
  exports: [UsersService],
  providers: [UsersService],
})
export class UsersModule {}
