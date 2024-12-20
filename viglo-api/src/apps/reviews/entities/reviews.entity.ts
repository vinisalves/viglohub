import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, Check, JoinColumn } from 'typeorm';
import { UserEntity } from '../../users/entities/user.entity';
import { PartnerEntity } from '../../partners/entities/partner.entity';
import { SoftFieldsForEntities } from '../../../utils/soft-fields-for-entities';

@Entity({
  name: 'reviews',
})
@Check(`"stars" BETWEEN 1 AND 5`)
export class ReviewsEntity extends SoftFieldsForEntities {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => UserEntity, (user) => user.reviews, { onDelete: 'CASCADE' })
  @JoinColumn({
    name: 'user_id',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'fk_reviews_user_id',
  })
  user: UserEntity;

  @ManyToOne(() => PartnerEntity, (partner) => partner.reviews, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: 'partner_id',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'fk_partner_user_id',
  })
  partner: PartnerEntity;

  @Column({ type: 'int', width: 1 })
  stars: number;

  @Column()
  comment: string;
}
