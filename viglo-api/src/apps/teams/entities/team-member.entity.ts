import {
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TeamEntity } from './teams.entity';
import { UserEntity } from '../../users/entities/user.entity';
import { RoleEntity } from '../../roles/entities/roles.entity';
import { SoftFieldsForEntities } from '../../../utils/soft-fields-for-entities';

@Entity({
  name: 'team_members',
})
export class TeamMemberEntity extends SoftFieldsForEntities {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => TeamEntity, (team) => team.members, { onDelete: 'CASCADE' })
  @JoinColumn({
    name: 'team_id',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'fk_team_member_tem_id',
  })
  team: TeamEntity;

  @ManyToOne(() => UserEntity, (user) => user.teams, { onDelete: 'CASCADE' })
  @JoinColumn({
    name: 'user_id',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'fk_team_member_user_id',
  })
  members: UserEntity;

  @ManyToMany(() => RoleEntity, (roles) => roles.team_members)
  @JoinTable({
    name: 'team_members_roles',
    joinColumn: {
      name: 'team_member_id',
      referencedColumnName: 'id',
      foreignKeyConstraintName: 'fk_team_member_id',
    },
    inverseJoinColumn: {
      name: 'role_id',
      referencedColumnName: 'id',
      foreignKeyConstraintName: 'fk_team_member_role_id',
    },
  })
  roles: RoleEntity[];
}
