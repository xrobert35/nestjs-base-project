import { Injectable } from '@nestjs/common';
import { JwtStrategy } from './jwt.strategy';

@Injectable()
export class AuthService {

  constructor(private readonly jwtStrategy: JwtStrategy) { }

  public authenticate(req, next) {
    const jwt: any = this.jwtStrategy;
    jwt.success = (user) => {
      req.user = user;
      next();
    };
    jwt.fail = () => next();
    jwt.error = () => next();
    jwt.authenticate(req, { session: false });
  }
}
