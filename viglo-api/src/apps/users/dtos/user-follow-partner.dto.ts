import { IsNotEmpty, IsUUID } from 'class-validator';

export class UserFollowPartnerDto {
  @IsNotEmpty({ message: 'Partner is required' })
  @IsUUID('4', { message: 'Invalid UUID' })
  partner_id: string;
}
