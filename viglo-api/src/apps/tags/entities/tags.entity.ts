import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { SoftFieldsForEntities } from '../../../utils/soft-fields-for-entities';

@Entity({
  name: 'tags',
})
export class TagsEntity extends SoftFieldsForEntities {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 20,
  })
  tag: string;
}
