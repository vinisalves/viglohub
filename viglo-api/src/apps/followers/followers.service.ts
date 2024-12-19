import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FollowersEntity } from './entities/followers.entity';
import { Repository, UpdateResult } from 'typeorm';
import { FollowPartnerDto } from './dtos/follow-partner.dto';
import { UnfollowPartnerDto } from './dtos/unfollow-partner.dto';
import { PartnerEntity } from '../partners/entities/partner.entity';
import { UserEntity } from '../users/entities/user.entity';
import { PartnersService } from '../partners/partners.service';
import { UsersService } from '../users/users.service';
import { CustomI18nService } from '../i18n/i18n.service';

@Injectable()
export class FollowersService {
  constructor(
    @InjectRepository(FollowersEntity)
    private readonly followersRepository: Repository<FollowersEntity>,

    private readonly i18n: CustomI18nService,
  ) {}

  async getUserFollows(user: UserEntity): Promise<FollowersEntity[]> {
    if (!user) throw new Error(this.i18n.t('users.validations.not_found'));

    return this.followersRepository.find({
      where: { user: user },
      relations: ['partner'],
    });
  }

  async countUserFollows(user: UserEntity): Promise<Number> {
    if (!user) throw new Error(this.i18n.t('users.validations.not_found'));

    return this.followersRepository.count({
      where: { user: user },
    });
  }

  async getPartnerFollows(partner: PartnerEntity): Promise<FollowersEntity[]> {
    if (!partner)
      throw new Error(this.i18n.t('partners.validations.not_found'));
    return this.followersRepository.find({
      where: { partner: partner },
      relations: ['user'],
    });
  }

  async countUserFollowers(partner: PartnerEntity): Promise<Number> {
    if (!partner)
      throw new Error(this.i18n.t('partners..validations.not_found'));
    return this.followersRepository.count({
      where: { partner: partner },
    });
  }

  async follow(
    user: UserEntity,
    partner: PartnerEntity,
  ): Promise<FollowersEntity> {
    if (!partner)
      throw new Error(this.i18n.t('partners.validations.not_found'));

    const newFollower = this.followersRepository.create({
      user: user,
      partner: partner,
    });
    return await this.followersRepository.save(newFollower);
  }

  async unFollow(
    user: UserEntity,
    partner: PartnerEntity,
  ): Promise<UpdateResult> {
    if (!partner)
      throw new Error(this.i18n.t('partners.validations.not_found'));

    if (!user) throw new Error(this.i18n.t('users.validations.not_found'));

    return this.followersRepository.softDelete({
      user: user,
      partner: partner,
    });
  }
}
