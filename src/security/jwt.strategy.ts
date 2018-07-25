import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Config } from '../config/config';
import { IncomingMessage } from 'http';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: Config.get().AUTH_JWT_KEY,
      passReqToCallback: true,
    });
  }

  async validate(_req: IncomingMessage, payload: any, done: (error, user) => void) {
    const user = payload;
    if (!user) {
      return done(new UnauthorizedException(), false);
    }
    done(null, user);
  }
}
