import { Logger } from 'winston';
import { LoggerFactory } from './logger.factory';
import { LoggerService } from '@nestjs/common';

export class WinLogger implements LoggerService {

  private logger: Logger;

  private constructor(private name: string) {
    this.logger = LoggerFactory.get();
  }

  public static get(name): WinLogger {
    return new WinLogger(name);
  }

  debug(message: string, params?: any) {
    this.logger.debug(`[${this.name}] - ${message}`, params);
  }

  info(message: string, params?: any) {
    this.logger.info(`[${this.name}] - ${message}`, params);
  }

  warn(message: string, params?: any) {
    this.logger.warn(`[${this.name}] - ${message}`, params);
  }

  error(message: string, params?: any) {
    this.logger.error(`[${this.name}] - ${message}`, params);
  }

  log(message: string) {
    this.logger.info(`[${this.name}] - ${message}`);
  }
}
