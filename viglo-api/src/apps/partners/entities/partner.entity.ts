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
import { SubscriberEntity } from '../../subscribers/entities/subscribers.entity';
import { FollowerEntity } from '../../followers/entities/followers.entity';
import { ReviewsEntity } from '../../reviews/entities/reviews.entity';
import { Exclude } from 'class-transformer';
import { generateHash, compareHash } from '../../../utils/encryption';
import { TagEntity } from '../../tags/entities/tags.entity';
import { PartnerSettingsEntity } from './partner-settings.entity';
import { UserEntity } from '../../users/entities/user.entity';
import { TeamEntity } from '../../teams/entities/teams.entity';

enum STATUS_PARTNER {
  ANALYSING = 'ANALYSING',
  READY = 'READY',
  CLOSED = 'CLOSED',
}

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

  @Column({
    type: 'enum',
    enum: STATUS_PARTNER,
    default: STATUS_PARTNER.ANALYSING,
  })
  status: STATUS_PARTNER;

  @Column({ unique: true })
  legal_name: string;

  @Column({ unique: true })
  business_id: string;

  @Exclude()
  @Column({ nullable: true })
  confirmation_code: number;

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

  @OneToMany(() => SubscriberEntity, (subscriber) => subscriber.partner)
  subscribers: SubscriberEntity[];

  @OneToMany(() => FollowerEntity, (followers) => followers.partner)
  followers: FollowerEntity[];

  @OneToMany(() => ReviewsEntity, (review) => review.partner)
  reviews: ReviewsEntity[];

  @ManyToMany(() => TagEntity)
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
  tags: TagEntity;

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

  @OneToMany(() => TeamEntity, (team) => team.partner)
  teams: TeamEntity[];
}
