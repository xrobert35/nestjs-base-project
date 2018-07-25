import { Logger, transports } from 'winston';
import { Config } from '../../config/config';

export class LoggerFactory {

  private static logger;

  public static get() {
    if (!this.logger) {
      this.logger = new Logger({
        transports: [
          new transports.Console({
            colorize: true,
            prettyPrint: true,
            level: Config.get().LOG_LEVEL,
            timestamp: true,
          }),
        ],
      });
    }
    return this.logger;
  }
}
