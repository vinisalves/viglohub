import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  JoinColumn,
  Unique,
} from 'typeorm';
import { UserEntity } from '../../users/entities/user.entity';
import { PartnerEntity } from '../../partners/entities/partner.entity';
import { SoftFieldsForEntities } from '../../../utils/soft-fields-for-entities';

@Entity({
  name: 'followers',
})
@Unique('unique_follow', ['user', 'partner'])
export class FollowerEntity extends SoftFieldsForEntities {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => UserEntity, (user) => user.follows, { onDelete: 'CASCADE' })
  @JoinColumn({
    name: 'user_id',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'fk_followers_user_id',
  })
  user: UserEntity;

  @ManyToOne(() => PartnerEntity, (partner) => partner.followers, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: 'partner_id',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'fk_followers_partner_id',
  })
  partner: PartnerEntity;
}
