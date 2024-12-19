import { Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SoftFieldsForEntities } from '../../../utils/soft-fields-for-entities';
import { PartnerEntity } from '../../partners/entities/partner.entity';
import { UserEntity } from '../../users/entities/user.entity';

@Entity({
  name: 'subscribers',
})
export class SubscribersEntity extends SoftFieldsForEntities {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => UserEntity, (user) => user.subscriptions, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id', foreignKeyConstraintName: 'fk_subscribers_user_id' })
  user: UserEntity;

  @ManyToOne(() => PartnerEntity, (partner) => partner.subscribers, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'partner_id', referencedColumnName: 'id', foreignKeyConstraintName: 'fk_subscribers_partner_id' })
  partner: PartnerEntity;
}
