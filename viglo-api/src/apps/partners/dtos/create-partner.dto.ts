import { IsNotEmpty, IsString, IsEmail, Matches } from 'class-validator';
import { PassRegex } from '../../auth/auth-pass.rules';

export class CreatePartnerDto {
  @IsNotEmpty({ message: 'Partner name is required' })
  @IsString({ message: 'Partner Name should be a String' })
  legal_name: string;

  @IsNotEmpty({ message: 'Business id is required' })
  @IsString({ message: 'Business id should be a String' })
  business_id: string;
}
