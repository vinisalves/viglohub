import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TeamEntity } from './entities/teams.entity';
import { Repository } from 'typeorm';
import { CustomI18nService } from '../i18n/i18n.service';
import { CreateTeamDto } from './dtos/create-team.dto';
import { PartnersService } from '../partners/partners.service';
import { UserEntity } from '../users/entities/user.entity';
import { UpdateTeamDto } from './dtos/update-team.dto';
import { TeamMemberEntity } from './entities/team-member.entity';
import { UsersService } from '../users/users.service';
import { AddteamMemberDto } from './dtos/add-team-member.dto';
import { PartnerEntity } from '../partners/entities/partner.entity';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(TeamEntity)
    private readonly teamsRepository: Repository<TeamEntity>,
    @InjectRepository(TeamMemberEntity)
    private readonly teamMemberRepository: Repository<TeamMemberEntity>,

    private readonly i18n: CustomI18nService,
  ) {}

  /**
   * Create a team for a partner
   * @param currentUser
   * @param createTeamDto
   * @returns
   */
  async create(user: UserEntity, partner: PartnerEntity, createTeamDto: CreateTeamDto) {
    const newTeam = this.teamsRepository.create({
      partner: partner,
      name: createTeamDto.name,
    });
    return await this.teamsRepository.save(newTeam);
  }

  /**
   * Update a partner team
   * @param currentUser
   * @param updateTeamsDto
   * @returns
   */
  async update(currentUser: UserEntity, updateTeamsDto: UpdateTeamDto): Promise<TeamEntity> {
    const updateResult = await this.teamsRepository.update(updateTeamsDto.team_id, {
      name: updateTeamsDto.name,
    });

    if (updateResult.affected > 0) {
      return await this.findById(updateTeamsDto.team_id);
    }
  }

  /**
   * Return all teams from a partner
   * @param partner id
   * @returns
   */
  async findAll(partnerId: string): Promise<TeamEntity[]> {
    return this.teamsRepository.find({
      where: {
        partner: {
          id: partnerId,
        },
      },
    });
  }
  /**
   * Find a team by Team Id
   * @param id
   * @returns
   */
  async findById(id: string): Promise<TeamEntity> {
    return await this.teamsRepository.findOne({
      where: {
        partner: {
          id,
        },
      },
    });
  }

  async addMembers(currentUser: UserEntity, teamId: string, addTeamMembersDto: AddteamMemberDto) {
    const teamFromDb = await this.findById(teamId);

    if (!teamFromDb) throw new Error(this.i18n.t('teams.validations.not_found'));

    let newEntities: TeamMemberEntity[] = [];
    for (const teamMember of addTeamMembersDto.members) {
      const teamMemberPayload: Partial<TeamMemberEntity> = {
        members: teamMember,
        team: teamFromDb,
      };
      const newTeamMember = this.teamMemberRepository.create(teamMemberPayload);
      newEntities.push(newTeamMember);
    }

    return await this.teamMemberRepository.save(newEntities);
  }

  async getMembers(partnerId: string, teamId: string): Promise<TeamMemberEntity[]> {
    return this.teamMemberRepository.find({
      where: {
        team: {
          id: teamId,
          partner: {
            id: partnerId,
          },
        },
      },
      relations: {
        members: true,
      },
    });
  }
}
