import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from 'src/core/enum/Role';
import { ROLES_KEY } from 'src/core/util/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    console.log('roles', requiredRoles);
    if (!requiredRoles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    console.log('#Roles user=>', request.user);
    return true;
    return requiredRoles.some((role) => request.user.type?.includes(role));
  }
}
