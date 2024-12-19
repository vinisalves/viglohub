import { IsEnum, IsNotEmpty } from 'class-validator';
import { THEME_ENUM } from '../../../enums/theme.enum';
import { LOCALES_ENUM } from '../../../enums/locales.enum';

export class SetUserSettingsDto {
  @IsNotEmpty({ message: 'Theme is required' })
  @IsEnum(THEME_ENUM, { message: 'Theme is invalid' })
  theme: THEME_ENUM;

  @IsNotEmpty({ message: 'Language is required' })
  @IsEnum(LOCALES_ENUM, { message: 'Language is invalid' })
  locale: LOCALES_ENUM;
}
