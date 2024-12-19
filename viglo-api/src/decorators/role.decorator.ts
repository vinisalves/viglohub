import { SetMetadata } from '@nestjs/common';
import { ROLES_ENUM } from '../enums/roles.enum';
// import PermissionsEnum from "../permission/permission.enum";
export const ROLES_KEY = 'roles';
export const Roles = (...roles: ROLES_ENUM[]) => SetMetadata('roles', roles);
