import {
  Injectable,
  Scope,
  CanActivate,
  Logger,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { AuthService } from '../apps/auth/auth.service';
import { UsersService } from '../apps/users/users.service';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';
import { PartnersService } from '../apps/partners/partners.service';

@Injectable({ scope: Scope.REQUEST })
export class JwtAuthGuard implements CanActivate {
  private readonly logger = new Logger();
  constructor(
    private reflector: Reflector,
    private usersService: UsersService,
    private partnersService: PartnersService,
    private readonly jwtService: JwtService,
    private readonly authService: AuthService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      let roles = this.reflector.get<string[]>('roles', context.getHandler());

      if (!roles) roles = [];
      const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
        context.getHandler(),
        context.getClass(),
      ]);

      if (isPublic) {
        return true;
      }

      const request = context.switchToHttp().getRequest();
      const token = this.extractFromHeaders(request);

      if (!token) {
        throw new UnauthorizedException();
      }

      const payload = await this.jwtService.verify(token, {
        secret: process.env.SECRET_JWT,
      });

      const userId = payload.userId;
      const partnerId = request.headers['x-partnerid'];

      const userFromDb = await this.usersService.findById(userId);
      if (!userFromDb) throw new UnauthorizedException();

      const partnerFromDb = await this.partnersService.findById(partnerId);
      if (!partnerFromDb) throw new UnauthorizedException();

      delete userFromDb.password;
      delete userFromDb.refresh_token;
      request.current_user = userFromDb;
      request.current_partner = partnerFromDb;

      return true;
    } catch (error) {
      throw new UnauthorizedException();
    }
  }

  private extractFromHeaders(request: Request) {
    return request?.cookies?.vg1;
  }
}
