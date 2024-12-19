import { Module } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamsEntity } from './entities/teams.entity';
import { PartnersModule } from '../partners/partners.module';
import { TeamMemberEntity } from './entities/team-member.entity';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([TeamsEntity, TeamMemberEntity])],
  providers: [TeamsService],
  exports: [TeamsService],
})
export class TeamsModule {}
