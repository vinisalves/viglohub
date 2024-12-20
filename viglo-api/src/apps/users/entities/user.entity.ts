import { Exclude } from 'class-transformer';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  BeforeInsert,
  OneToMany,
  ManyToMany,
  JoinTable,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { generateHash, compareHash } from '../../../utils/encryption';
import { SoftFieldsForEntities } from '../../../utils/soft-fields-for-entities';
import { UserProfileEntity } from './user-profile.entity';
import { UserSettingsEntity } from './user-settings.entity';
import { SubscriberEntity } from '../../subscribers/entities/subscribers.entity';
import { FollowerEntity } from '../../followers/entities/followers.entity';
import { ReviewsEntity } from '../../reviews/entities/reviews.entity';
import { TagEntity } from '../../tags/entities/tags.entity';
import { PartnerEntity } from '../../partners/entities/partner.entity';
import { TeamEntity } from '../../teams/entities/teams.entity';

@Entity({
  name: 'users',
})
export class UserEntity extends SoftFieldsForEntities {
  constructor(id?: string) {
    super();
    this.id = id;
  }
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Exclude()
  @Column()
  password: string;

  @Exclude()
  @Column({ nullable: true })
  refresh_token?: string;

  @Exclude()
  @Column({ nullable: true })
  recover_pass_token: string;

  @Exclude()
  @Column({ nullable: true })
  user_gateway_id: string;

  @Exclude()
  @Column({ nullable: true })
  confirmation_code: number;

  @Exclude()
  @Column({ nullable: true })
  is_confirmed: boolean;

  @OneToOne(() => UserProfileEntity, { cascade: true })
  @JoinColumn({
    name: 'profile_id',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'fk_user_profile_id',
  })
  profile: UserProfileEntity;

  @OneToOne(() => UserSettingsEntity, { cascade: true })
  @JoinColumn({
    name: 'settings_id',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'fk_user_settings_id',
  })
  settings: UserSettingsEntity;

  @OneToMany(() => SubscriberEntity, (subscriptions) => subscriptions.user)
  subscriptions: SubscriberEntity[];

  @OneToMany(() => FollowerEntity, (follows) => follows.user)
  follows: FollowerEntity[];

  @OneToMany(() => ReviewsEntity, (reviews) => reviews.user)
  reviews: ReviewsEntity[];

  @ManyToMany(() => TagEntity)
  @JoinTable({
    name: 'users_tags',
    joinColumn: {
      name: 'user_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'tag_id',
      referencedColumnName: 'id',
    },
  })
  tags: TagEntity;

  @ManyToMany(() => PartnerEntity, (partner) => partner.owners)
  partners: PartnerEntity[];

  @ManyToMany(() => TeamEntity, (teams) => teams.members)
  teams: TeamEntity[];

  @BeforeInsert()
  encryptPass() {
    if (!this.password) return;

    const hash = generateHash(this.password);

    this.password = hash;
  }

  checkPassword(password: string): boolean {
    return compareHash(password, this.password);
  }

  checkRecoverPass(token: string): boolean {
    return compareHash(token, this.recover_pass_token);
  }
}
