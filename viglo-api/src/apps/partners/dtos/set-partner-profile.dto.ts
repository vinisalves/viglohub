import { IsEnum, IsOptional, IsString } from 'class-validator';
import { THEME_ENUM } from '../../../enums/theme.enum';

export class SetPartnerProfileDto {
  @IsOptional()
  @IsString({ message: 'Description should be a string' })
  description: string;

  @IsOptional()
  @IsString({ message: 'Category should be a string' })
  category: string;

  @IsOptional()
  @IsString({ message: 'Street should be a string' })
  street: string;

  @IsOptional()
  @IsString({ message: 'City should be a string' })
  city: string;

  @IsOptional()
  @IsString({ message: 'State should be a string' })
  state: string;

  @IsOptional()
  @IsString({ message: 'Postal code should be a string' })
  postal_code: string;

  @IsOptional()
  @IsString({ message: 'Country should be a string' })
  country: string;

  @IsOptional()
  @IsString({ message: 'Complement should be a string' })
  complement?: string;

  @IsOptional()
  @IsString({ message: 'Phone should be a string' })
  phone: string;

  @IsOptional()
  @IsEnum(THEME_ENUM)
  theme: THEME_ENUM;
}
