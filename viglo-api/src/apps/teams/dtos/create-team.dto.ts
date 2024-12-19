import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateTeamDto {
  @IsNotEmpty({ message: 'Team name is required' })
  name: string;
}
