import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './user.entity';

import { SoftFieldsForEntities } from '../../../utils/soft-fields-for-entities';
import { THEME_ENUM } from '../../../enums/theme.enum';

import { LOCALES_ENUM } from '../../../enums/locales.enum';

@Entity({
  name: 'user_settings',
})
export class UserSettingsEntity extends SoftFieldsForEntities {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => UserEntity)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id', foreignKeyConstraintName: 'fk_profile_user_id' })
  user: UserEntity;

  @Column({
    type: 'enum',
    enum: THEME_ENUM,
    default: THEME_ENUM.LIGHT,
  })
  theme: THEME_ENUM;

  @Column({
    type: 'enum',
    enum: LOCALES_ENUM,
    default: LOCALES_ENUM.EN,
  })
  locale: LOCALES_ENUM;
}
