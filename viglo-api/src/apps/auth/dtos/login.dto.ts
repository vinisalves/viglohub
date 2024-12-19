import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';
import { i18nValidationMessage } from 'nestjs-i18n';
import { CustomI18nService } from '../../i18n/i18n.service';
import { PassRegex } from '../auth-pass.rules';

export class LoginDto {
  constructor(private readonly i18n: CustomI18nService) {}
  @IsNotEmpty({
    message: 'Email is required',
  })
  @IsEmail({}, { message: "It doesn't look an email" })
  email: string;

  @IsNotEmpty({ message: 'Password is required' })
  @IsString({ message: 'Password should be a String' })
  @Matches(PassRegex.LOWERCASE, {
    message: 'Password must contain at least one lowercase letter',
  })
  @Matches(PassRegex.NUMBER, {
    message: 'Password must contain at least one number',
  })
  @Matches(PassRegex.SPECIAL_CHAR, {
    message: 'Password must contain at least one special character',
  })
  @Matches(PassRegex.UPPERCASE, {
    message: 'Password must contain at least one uppercase letter',
  })
  @Matches(PassRegex.MIN_8, {
    message: 'Password must be at least 8 characters long',
  })
  @Matches(PassRegex.MAX_16, {
    message: 'Password must be at most 16 characters long',
  })
  password: string;
}
