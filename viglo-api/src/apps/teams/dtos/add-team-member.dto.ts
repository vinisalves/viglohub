import { ArrayMinSize, IsArray, IsNotEmpty, IsUUID } from 'class-validator';
import { UserEntity } from '../../users/entities/user.entity';

export class AddteamMemberDto {
  @IsNotEmpty({ message: 'Member list is required' })
  @IsArray({ message: 'Member list shoud be an  array' })
  @ArrayMinSize(1, { message: 'Memeber list needs at least one member' })
  members: UserEntity[];
}
