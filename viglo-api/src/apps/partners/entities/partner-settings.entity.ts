import { Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { PartnerEntity } from './partner.entity';

@Entity({
  name: 'partner_settings',
})
export class PartnerSettingsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => PartnerEntity)
  @JoinColumn({
    name: 'partner_id',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'fk_settings_partner_id',
  })
  partner: PartnerEntity;
}
