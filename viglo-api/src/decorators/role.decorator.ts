import { SetMetadata } from '@nestjs/common';

// import PermissionsEnum from "../permission/permission.enum";
export const ROLES_KEY = 'roles';
export const Roles = (...roles: []) => SetMetadata('roles', roles);
