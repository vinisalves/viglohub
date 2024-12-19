import { BadRequestException, Body, Controller, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { CurrentUser } from '../../decorators/current-user.decorator';
import { UserEntity } from './entities/user.entity';
import { SetUserProfileDto } from './dtos/set-user-profile.dto';
import { SetUserSettingsDto } from './dtos/set-user-settings.dto';
import { FollowPartnerDto } from '../followers/dtos/follow-partner.dto';
import { UserFollowPartnerDto } from './dtos/user-follow-partner.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    try {
      return this.usersService.create(createUserDto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Patch(':id')
  update(@CurrentUser() currentUser: UserEntity, @Body() updateUserDto: UpdateUserDto) {
    console.log('here');
    try {
      return this.usersService.update(currentUser.id, updateUserDto);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Get(':id')
  findById(@Param('id', new ParseUUIDPipe()) userId: string) {
    return this.usersService.findById(userId);
  }

  @Patch('profile')
  setUserProfile(@CurrentUser() currentUser: UserEntity, @Body() setUserProfileDto: SetUserProfileDto) {
    return this.usersService.setUserProfile(currentUser, setUserProfileDto);
  }

  @Patch('settings')
  setUserSettings(@CurrentUser() currentUser: UserEntity, @Body() setUserSettingsDto: SetUserSettingsDto) {
    return this.usersService.setUserSettings(currentUser, setUserSettingsDto);
  }

  @Post('follow')
  followPartner(@CurrentUser() currentUser: UserEntity, @Body() followParnerDto: UserFollowPartnerDto) {
    try {
      return this.usersService.followPartner(currentUser, followParnerDto.partner_id);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
