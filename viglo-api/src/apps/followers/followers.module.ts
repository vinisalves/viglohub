import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FollowerEntity } from './entities/followers.entity';
import { FollowersService } from './followers.service';
import { UsersModule } from '../users/users.module';
import { PartnersModule } from '../partners/partners.module';

@Module({
  imports: [TypeOrmModule.forFeature([FollowerEntity])],
  exports: [FollowersService],
  providers: [FollowersService],
})
export class FollowersModule {}
