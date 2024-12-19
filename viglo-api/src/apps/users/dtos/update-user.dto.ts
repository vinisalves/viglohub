import { IsNotEmpty } from 'class-validator';
import { CreateUserDto } from './create-user.dto';
import { i18nValidationMessage } from 'nestjs-i18n';

export class UpdateUserDto implements Partial<CreateUserDto> {
  user_gateway_id: string;
}
