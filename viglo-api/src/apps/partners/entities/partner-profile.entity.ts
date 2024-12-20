import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PartnerEntity } from './partner.entity';
import { FileEntity } from '../../files/entities/file.entity';
import { THEME_ENUM } from '../../../enums/theme.enum';
import { PartnerSettingsEntity } from './partner-settings.entity';

@Entity({
  name: 'partner_profile',
})
export class PartnerProfileEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  category: string;

  @Column()
  street: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column({ length: 10 })
  postal_code: string;

  @Column()
  country: string;

  @Column({ nullable: true })
  complement?: string;

  @Column()
  phone: string;

  @Column({
    type: 'enum',
    enum: THEME_ENUM,
    default: THEME_ENUM.LIGHT,
  })
  theme: THEME_ENUM;

  @OneToOne(() => PartnerEntity)
  @JoinColumn({
    name: 'partner_id',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'fk_profile_partner_id',
  })
  partner: PartnerEntity;

  @OneToOne(() => FileEntity, (file) => file.id, { nullable: true })
  @JoinColumn({
    name: 'logo_id',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'fk_profile_logo_id',
  })
  logo: FileEntity;

  @OneToOne(() => FileEntity, (file) => file.id, { nullable: true })
  @JoinColumn({
    name: 'banner_id',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'fk_profile_banner_id',
  })
  banner: FileEntity;
}
