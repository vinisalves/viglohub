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
import { TeamsEntity } from './teams.entity';
import { UserEntity } from '../../users/entities/user.entity';
import { RolesEntity } from '../../roles/entities/roles.entity';

@Entity({
  name: 'team_members',
})
export class TeamMemberEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => TeamsEntity, (team) => team.members, { onDelete: 'CASCADE' })
  @JoinColumn({
    name: 'team_id',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'fk_team_member_tem_id',
  })
  team: TeamsEntity;

  @ManyToOne(() => UserEntity, (user) => user.teams, { onDelete: 'CASCADE' })
  @JoinColumn({
    name: 'user_id',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'fk_team_member_user_id',
  })
  members: UserEntity;

  @ManyToMany(() => RolesEntity, (roles) => roles.team_members)
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
  roles: RolesEntity[];
}
