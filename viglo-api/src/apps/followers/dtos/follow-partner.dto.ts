import { IsNotEmpty, IsUUID } from 'class-validator';
import { UserEntity } from '../../users/entities/user.entity';

export class FollowPartnerDto {
  @IsNotEmpty({ message: 'User is required' })
  @IsUUID('4', { message: 'Invalid UUID' })
  user_id?: string;

  @IsNotEmpty({ message: 'Partner is required' })
  @IsUUID('4', { message: 'Invalid UUID' })
  partner_id: string;
}
