import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { UsersService } from '../apps/users/users.service';

@Injectable()
export default class AuthJwtRefreshGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private usersService: UsersService,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const request = context.switchToHttp().getRequest();
      const token = this.extractFromHeaders(request);

      if (!token) {
        throw new UnauthorizedException();
      }

      const payload = await this.jwtService.verify(token, {
        secret: process.env.SECRET_REFRESH_JWT,
      });

      /**
       * Verifica se token informado é o mesmo salvo no banco deados
       */
      const checkRefreshTokenFromDb = await this.usersService.getUserIfRefreshTokenMatches(token, payload.userId);

      if (!checkRefreshTokenFromDb) throw new Error();

      request.current_user = { id: payload.userId };

      return true;
    } catch (error) {
      throw new UnauthorizedException();
    }
  }

  extractFromHeaders(request: Request) {
    return request?.cookies?.vg2;
  }
}
