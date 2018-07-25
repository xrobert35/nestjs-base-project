import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import * as lodash from 'lodash';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private readonly reflector: Reflector) { }

  canActivate(context: ExecutionContext): boolean {
    const controlerRoles: Array<string> = this.reflector.get<Array<string>>('roles', context.getClass()) || [];
    const methodeRoles: Array<string> = this.reflector.get<Array<string>>('roles', context.getHandler()) || [];
    const controlerAuthenticate: boolean = this.reflector.get<boolean>('authenticate', context.getClass()) || false;
    const methodeAuthenticate: boolean = this.reflector.get<boolean>('authenticate', context.getHandler()) || false;

    const roles: Array<string> = controlerRoles.concat(methodeRoles);
    const authenticate = controlerAuthenticate || methodeAuthenticate || !lodash.isEmpty(roles);

    if (!authenticate) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;
    if (!user && authenticate) {
      return false;
    }
    if (!lodash.isEmpty(roles)) {
      return this.hasRoleOneOfRoles(user, roles);
    } else {
      // no security
      return true;
    }
  }

  private hasRoleOneOfRoles(user, roles): boolean {
    if (!user || !user.role) {
      return false;
    }
    return roles.includes(user.role);
  }
}
