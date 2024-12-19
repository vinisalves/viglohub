import { IsDate, IsEnum, IsNotEmpty, IsOptional, IsString, IsUUID, Length } from 'class-validator';
import { USER_GENDER_ENUM } from '../user.enum.dto';

export class SetUserProfileDto {
  @IsNotEmpty({ message: 'First name is required' })
  first_name: string;

  @IsNotEmpty({ message: 'Last name is required' })
  last_name: string;

  @IsOptional()
  @IsString({ message: 'Street should be a string' })
  street?: string;

  @IsOptional()
  @IsString({ message: 'City should be a string' })
  city?: string;

  @IsOptional()
  @IsString({ message: 'State should be a string' })
  state?: string;

  @IsOptional()
  @IsString({ message: 'Street should be a string' })
  @Length(5, 10, { message: 'Postal code max size is 10' })
  postal_code?: string;

  @IsOptional()
  @IsString({ message: 'Country should be a string' })
  country?: string;

  @IsOptional()
  @IsString({ message: 'Complement should be a string' })
  complement?: string;

  @IsOptional()
  @IsString({ message: 'Street should be a string' })
  @IsEnum(USER_GENDER_ENUM, { message: 'Invalid gender' })
  gender: USER_GENDER_ENUM;

  @IsOptional()
  @IsDate({ message: 'Invalida birth date' })
  birth_date: Date;

  @IsOptional()
  @IsString({ message: 'Phone is should be a string' })
  phone: string;
}
