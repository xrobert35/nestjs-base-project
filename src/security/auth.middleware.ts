import { Injectable, NestMiddleware, MiddlewareFunction } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {

  constructor(private readonly authService: AuthService) {}

  resolve(..._args: any[]): MiddlewareFunction {
    return (req: any, _res, next) => {
      this.authService.authenticate(req, next);
    };
  }
}
