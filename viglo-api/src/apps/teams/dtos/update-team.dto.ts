import { IsNotEmpty, IsOptional, IsUUID } from 'class-validator';

export class UpdateTeamDto {
  @IsNotEmpty({ message: 'Team id is required' })
  team_id: string;

  @IsOptional()
  name: string;

  @IsNotEmpty({ message: 'Partner id is requied' })
  @IsUUID('4', { message: 'Invalid UUID' })
  partner_id: string;
}
