import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PartnerEntity } from './entities/partner.entity';
import { FindOneOptions, FindOptions, Repository } from 'typeorm';
import { CreatePartnerDto } from './dtos/create-partner.dto';
import { UpdatePartnerDto } from './dtos/update-partner.dto';
import { SetPartnerProfileDto } from './dtos/set-partner-profile.dto';
import { PartnerProfileEntity } from './entities/partner-profile.entity';
import { PartnerSettingsEntity } from './entities/partner-settings.entity';
import { CustomI18nService } from '../i18n/i18n.service';
import { UserEntity } from '../users/entities/user.entity';
import { TeamsService } from '../teams/teams.service';

@Injectable()
export class PartnersService {
  constructor(
    @InjectRepository(PartnerEntity)
    private readonly partnerRepository: Repository<PartnerEntity>,
    @InjectRepository(PartnerProfileEntity)
    private readonly partnerProfileRepository: Repository<PartnerProfileEntity>,
    @InjectRepository(PartnerSettingsEntity)
    private readonly partnerSettingsRepository: Repository<PartnerSettingsEntity>,
    private readonly teamsService: TeamsService,
    private readonly i18n: CustomI18nService,
  ) {}
  /**
   * create a partner
   * @param createPartnerDto
   * @returns Promise<PartnerEntity>
   */
  async create(
    currentUser: UserEntity,
    createPartnerDto: CreatePartnerDto,
  ): Promise<PartnerEntity> {
    const { legal_name, business_id } = createPartnerDto;
    const partnerExists = await this.partnerRepository.findOne({
      where: {
        legal_name: legal_name.toLowerCase(),
        business_id: business_id,
      },
    });

    if (partnerExists)
      throw new Error(
        this.i18n.t('partners.validations.already_exists', { args: { legal_name, business_id } }),
      );

    createPartnerDto.legal_name = createPartnerDto.legal_name.toLowerCase();
    const newPartner = this.partnerRepository.create({
      owners: [currentUser],
      ...createPartnerDto,
    });
    return this.partnerRepository.save(newPartner);
  }

  /**
   * Update a partner
   * @param id
   * @param updatePartnerDto
   * @returns
   */
  async update(id: string, updatePartnerDto: UpdatePartnerDto) {
    const updateResult = await this.partnerRepository.update(id, updatePartnerDto);
    if (updateResult.affected > 0) return await this.findById(id);
  }
  /**
   * List all partners
   * @returns
   */
  findAll() {
    return this.partnerRepository.find();
  }

  findById(partnerId: string, options?: FindOneOptions<PartnerEntity>) {
    return this.partnerRepository.findOne({
      where: { id: partnerId },
      ...options,
    });
  }

  /**
   * Set a partner profile
   * @param partnerId
   * @param setParnterProfileDto
   * @returns Promise<PartnerProfileEntity>
   */
  async setPartnerProfile(
    partnerId: string,
    setParnterProfileDto: SetPartnerProfileDto,
  ): Promise<PartnerProfileEntity> {
    const partnerFromDb = await this.findById(partnerId);

    if (!partnerFromDb) throw new Error(this.i18n.t('partners.validations.not_found'));

    const parnterHasProfile = await this.partnerProfileRepository.findOne({
      where: {
        partner: {
          id: partnerFromDb.id,
        },
      },
    });

    if (parnterHasProfile) {
      const updateResult = await this.partnerProfileRepository.update(
        parnterHasProfile.id,
        setParnterProfileDto,
      );
      if (updateResult.affected > 0) {
        return await this.partnerProfileRepository.findOne({
          where: {
            id: parnterHasProfile.id,
          },
        });
      }
    }

    const newPartnerProfile = this.partnerProfileRepository.create({
      partner: partnerFromDb,
      ...setParnterProfileDto,
    });
    return await this.partnerProfileRepository.save(newPartnerProfile);
  }
  /**
   * Configure Partner settings
   * @param partnerId
   * @param setPartnerSettingDto
   * @returns
   */
  async setPartnerSettings(partnerId: string, setPartnerSettingDto: unknown) {
    const partnerFromDb = await this.findById(partnerId);

    if (!partnerFromDb) throw new Error(this.i18n.t('partners.validations.not_found'));

    const partnerHasSettings = await this.partnerSettingsRepository.findOne({
      where: {
        partner: {
          id: partnerFromDb.id,
        },
      },
    });

    if (partnerHasSettings) {
      const updateResults = await this.partnerSettingsRepository.update(
        partnerHasSettings.id,
        setPartnerSettingDto,
      );
      if (updateResults.affected > 0)
        return await this.partnerSettingsRepository.findOne({
          where: {
            id: partnerHasSettings.id,
          },
        });

      throw new Error(this.i18n.t('partners.validations.update_not_found'));
    }

    const newSettings = this.partnerSettingsRepository.create({
      partner: partnerFromDb,
    });
    return await this.partnerSettingsRepository.save(newSettings);
  }

  async checkParnterOwener(user: UserEntity, partnerId: string) {
    const partnerFromDb = await this.findById(partnerId, {
      relations: {
        owners: true,
      },
    });

    if (!partnerFromDb) throw new Error(this.i18n.t('partners.validations.not_found'));

    return partnerFromDb.owners.some((owner) => owner.id === user.id);
  }

  async getPartnerTeams(partnerId: string) {
    return this.teamsService.findById(partnerId);
  }
}
