import { IsNotEmpty } from 'class-validator';
import { UserEntity } from '../../users/entities/user.entity';

export class UnfollowPartnerDto {
  @IsNotEmpty({ message: 'User is required' })
  user: string;

  @IsNotEmpty({ message: 'Partner is required' })
  partner: string;
}
