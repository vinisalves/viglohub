import { Module } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamEntity } from './entities/teams.entity';
import { PartnersModule } from '../partners/partners.module';
import { TeamMemberEntity } from './entities/team-member.entity';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([TeamEntity, TeamMemberEntity])],
  providers: [TeamsService],
  exports: [TeamsService],
})
export class TeamsModule {}
