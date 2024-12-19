import { forwardRef, Module } from '@nestjs/common';
import { PartnersService } from './partners.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PartnerEntity } from './entities/partner.entity';
import { PartnerProfileEntity } from './entities/partner-profile.entity';
import { PartnerSettingsEntity } from './entities/partner-settings.entity';
import { PartnersController } from './controllers/partners.controller';
import { TeamsModule } from '../teams/teams.module';
import { PartnerTeamsController } from './controllers/partners.teams.controller';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    TeamsModule,
    TypeOrmModule.forFeature([PartnerEntity, PartnerProfileEntity, PartnerSettingsEntity]),
    TeamsModule,
    forwardRef(() => UsersModule),
  ],
  providers: [PartnersService],
  exports: [PartnersService],
  controllers: [PartnersController, PartnerTeamsController],
})
export class PartnersModule {}
