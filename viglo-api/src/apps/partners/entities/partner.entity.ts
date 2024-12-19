import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { PartnerProfileEntity } from './partner-profile.entity';
import { SoftFieldsForEntities } from '../../../utils/soft-fields-for-entities';
import { SubscribersEntity } from '../../subscribers/entities/subscribers.entity';
import { FollowersEntity } from '../../followers/entities/followers.entity';
import { ReviewsEntity } from '../../reviews/entities/reviews.entity';
import { Exclude } from 'class-transformer';
import { generateHash, compareHash } from '../../../utils/encryption';
import { TagsEntity } from '../../tags/entities/tags.entity';
import { PartnerSettingsEntity } from './partner-settings.entity';
import { UserEntity } from '../../users/entities/user.entity';
import { TeamsEntity } from '../../teams/entities/teams.entity';

@Entity({
  name: 'partners',
})
export class PartnerEntity extends SoftFieldsForEntities {
  constructor(id?: string) {
    super();
    this.id = id;
  }
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  legal_name: string;

  @Column({ unique: true })
  business_id: string;

  @OneToOne(() => PartnerProfileEntity, { cascade: true })
  @JoinColumn({
    name: 'profile_id',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'fk_partner_profile_id',
  })
  profile: PartnerProfileEntity;

  @OneToOne(() => PartnerSettingsEntity, { cascade: true })
  @JoinColumn({
    name: 'settings_id',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'fk_partner_settings_id',
  })
  settings: PartnerSettingsEntity;

  @OneToMany(() => SubscribersEntity, (subscriber) => subscriber.partner)
  subscribers: SubscribersEntity[];

  @OneToMany(() => FollowersEntity, (followers) => followers.partner)
  followers: FollowersEntity[];

  @OneToMany(() => ReviewsEntity, (review) => review.partner)
  reviews: ReviewsEntity[];

  @ManyToMany(() => TagsEntity)
  @JoinTable({
    name: 'partners_tags',
    joinColumn: {
      name: 'partner_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'tag_id',
      referencedColumnName: 'id',
    },
  })
  tags: TagsEntity;

  @ManyToMany(() => UserEntity, (user) => user.partners)
  @JoinTable({
    name: 'partners_owners',
    joinColumn: {
      name: 'partner_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
  })
  owners: UserEntity[];

  @OneToMany(() => TeamsEntity, (team) => team.partner)
  teams: TeamsEntity[];
}
