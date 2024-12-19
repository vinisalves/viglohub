import { IsNotEmpty, IsString } from 'class-validator';
import { CreatePartnerDto } from './create-partner.dto';

export class UpdatePartnerDto implements Partial<CreatePartnerDto> {
  @IsNotEmpty({ message: 'Partner name is required' })
  @IsString({ message: 'Partner Name should be a String' })
  legal_name: string;
}
