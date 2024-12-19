import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { UserEntity } from './user.entity';
import { FileEntity } from '../../files/entities/file.entity';
import { USER_GENDER_ENUM } from '../user.enum.dto';
import { SoftFieldsForEntities } from '../../../utils/soft-fields-for-entities';
@Entity({
  name: 'user_profile',
})
@Unique(['user'])
export class UserProfileEntity extends SoftFieldsForEntities {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @OneToOne(() => UserEntity)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id', foreignKeyConstraintName: 'fk_profile_user_id' })
  user: UserEntity;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({ nullable: true })
  street: string;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  state: string;

  @Column({ length: 10, nullable: true })
  postal_code: string;

  @Column({ nullable: true })
  country: string;

  @Column({ nullable: true })
  complement?: string;

  @Column()
  phone: string;

  @Column({
    type: 'enum',
    enum: USER_GENDER_ENUM,
    nullable: true,
  })
  gender: USER_GENDER_ENUM;

  @Column({
    type: 'date',
    nullable: true,
  })
  birth_date: Date;

  @OneToOne(() => FileEntity, (file) => file.id, { nullable: true })
  @JoinColumn({ name: 'avatar_id', referencedColumnName: 'id', foreignKeyConstraintName: 'fk_profile_photo_id' })
  photo: File;
}
