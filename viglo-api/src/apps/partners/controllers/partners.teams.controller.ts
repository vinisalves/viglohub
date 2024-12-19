import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { CurrentPartner } from '../../../decorators/current-partrner.decorator copy';
import { CurrentUser } from '../../../decorators/current-user.decorator';
import { CreateTeamDto } from '../../teams/dtos/create-team.dto';
import { UserEntity } from '../../users/entities/user.entity';
import { PartnerEntity } from '../entities/partner.entity';
import { TeamsService } from '../../teams/teams.service';
import { PartnersService } from '../partners.service';
import { CustomI18nService } from '../../i18n/i18n.service';
import { AddteamMemberDto } from '../../teams/dtos/add-team-member.dto';
import { UsersService } from '../../users/users.service';

@Controller('partners')
export class PartnerTeamsController {
  constructor(
    private readonly partnersService: PartnersService,
    private readonly userService: UsersService,
    private readonly teamsService: TeamsService,
    private readonly i18n: CustomI18nService,
  ) {}

  @Get(':partner_id/teams')
  findAll(@Param('partner_id', new ParseUUIDPipe()) id: string) {
    return this.teamsService.findAll(id);
  }

  @Post(':partner_id/teams')
  createPartnerTeam(
    @Body('partner_id', new ParseUUIDPipe()) partnerId: string,
    @CurrentUser() currentUser: UserEntity,
    @CurrentPartner() currentPartner: PartnerEntity,
    @Body() createTeamDto: CreateTeamDto,
  ) {
    try {
      const isOwner = this.partnersService.checkParnterOwener(currentUser, partnerId);
      if (!isOwner) {
        throw new Error(this.i18n.t('teams.validations.not_a_owner'));
      }

      return this.teamsService.create(currentUser, new PartnerEntity(partnerId), {
        name: createTeamDto.name,
      });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Post(':partner_id/teams/:team_id/members')
  async addMember(
    @Param('partner_id', new ParseUUIDPipe()) partnerId: string,
    @Param('team_id', new ParseUUIDPipe()) teamId: string,
    @CurrentUser() currentUser: UserEntity,
    @Body() addTeamMembersDto: AddteamMemberDto,
  ) {
    try {
      const isOwner = await this.partnersService.checkParnterOwener(currentUser, partnerId);
      if (!isOwner) throw new Error(this.i18n.t('teams.validations.not_a_owner'));

      const listOfNewMembers: UserEntity[] = [];
      for (const member of addTeamMembersDto.members) {
        const memberFromDb = await this.userService.findById(member.id);
        if (!memberFromDb)
          throw new Error(
            this.i18n.t('users.validations.not_found', { args: { username: member } }),
          );

        listOfNewMembers.push(memberFromDb);
      }
      return this.teamsService.addMembers(currentUser, teamId, {
        members: listOfNewMembers,
      });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Get(':partner_id/teams/:team_id/members')
  async getTeamMembers(
    @Param('partner_id', new ParseUUIDPipe()) partnerId: string,
    @Param('team_id', new ParseUUIDPipe()) teamId: string,
  ) {
    return this.teamsService.getMembers(partnerId, teamId);
  }
}
