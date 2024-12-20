import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SoftFieldsForEntities } from '../../../utils/soft-fields-for-entities';
import { TeamMemberEntity } from '../../teams/entities/team-member.entity';

@Entity({
  name: 'roles',
})
export class RoleEntity extends SoftFieldsForEntities {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  role: string;

  @ManyToMany(() => TeamMemberEntity, (teamMember) => teamMember.members)
  team_members: TeamMemberEntity[];
}
