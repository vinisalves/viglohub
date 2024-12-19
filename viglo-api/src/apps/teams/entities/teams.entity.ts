import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PartnerEntity } from '../../partners/entities/partner.entity';
import { SoftFieldsForEntities } from '../../../utils/soft-fields-for-entities';
import { TeamMemberEntity } from './team-member.entity';

@Entity({
  name: 'teams',
})
export class TeamsEntity extends SoftFieldsForEntities {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => PartnerEntity, (partner) => partner.teams)
  @JoinColumn({ name: 'partner_id' })
  partner: PartnerEntity;

  @OneToMany(() => TeamMemberEntity, (teamMeamber) => teamMeamber.id)
  @JoinColumn({
    name: 'team_memebers_id',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'fk_team_members_id',
  })
  members: TeamMemberEntity[];
}
