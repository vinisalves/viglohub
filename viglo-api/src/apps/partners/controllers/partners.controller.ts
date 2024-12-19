import {
  BadGatewayException,
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { PartnersService } from '../partners.service';
import { CurrentUser } from '../../../decorators/current-user.decorator';
import { UserEntity } from '../../users/entities/user.entity';
import { CreatePartnerDto } from '../dtos/create-partner.dto';
import { UpdatePartnerDto } from '../dtos/update-partner.dto';
import { SetPartnerProfileDto } from '../dtos/set-partner-profile.dto';
import { CurrentPartner } from '../../../decorators/current-partrner.decorator copy';
import { PartnerEntity } from '../entities/partner.entity';
import { TeamsService } from '../../teams/teams.service';
import { CustomI18nService } from '../../i18n/i18n.service';
import { CreateTeamDto } from '../../teams/dtos/create-team.dto';

@Controller('partners')
export class PartnersController {
  constructor(
    private readonly partnersService: PartnersService,
    private readonly teamsService: TeamsService,
    private readonly i18n: CustomI18nService,
  ) {}

  @Post()
  async create(@CurrentUser() current: UserEntity, @Body() createParnterDto: CreatePartnerDto) {
    try {
      return await this.partnersService.create(current, createParnterDto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Get()
  findAll() {
    return this.partnersService.findAll();
  }

  @Patch(':partner_id')
  update(
    @Param('partner_id', new ParseUUIDPipe()) partnerId: string,
    @Body() updatePartnerDto: UpdatePartnerDto,
  ) {
    try {
      return this.partnersService.update(partnerId, updatePartnerDto);
    } catch (error) {
      throw new BadGatewayException(error.message);
    }
  }

  @Get(':partner_id')
  findById(@Param('partner_id', new ParseUUIDPipe()) partnerId: string) {
    return this.partnersService.findById(partnerId);
  }

  @Post(':partner_id/profile')
  setPartnerProfile(
    @Param('partner_id', new ParseUUIDPipe()) partnerId: string,
    setPartnerProfileDto: SetPartnerProfileDto,
  ) {
    try {
      return this.partnersService.setPartnerProfile(partnerId, setPartnerProfileDto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Post(':partner_id/settings')
  setPartnerSettings(
    @Param('partner_id', new ParseUUIDPipe()) partnerId: string,
    setPartnerSettingsDto: unknown,
  ) {
    try {
      return this.partnersService.setPartnerSettings(partnerId, setPartnerSettingsDto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
