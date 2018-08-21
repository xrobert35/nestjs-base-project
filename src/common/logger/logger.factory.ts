import * as winston from 'winston';
import { Config } from '../../config/config';

export class LoggerFactory {

  private static logger;

  public static get() {
    if (!this.logger) {

      const myCustomLevels = {
        levels: {
          warn: 0,
          debug: 1,
          info: 2,
          error: 3,
        },
        colors: {
          warn: 'blue',
          debug: 'green',
          info: 'blue',
          error: 'red',
        },
      };

      this.logger = winston.createLogger({
        levels: myCustomLevels.levels,
        transports: [
          new winston.transports.Console({
            level: Config.get().LOG_LEVEL,
            format: winston.format.combine(
              winston.format.timestamp(),
              winston.format.colorize(),
              winston.format.printf((info) => {
                const {
                  timestamp, level, message, ...args,
                } = info;
                return `${timestamp} - ${level} - ${message} ${Object.keys(args).length ? JSON.stringify(args, null, 2) : ''}`;
              }),
            ),
          }),
        ],
      });
      winston.addColors(myCustomLevels.colors);
    }
    return this.logger;
  }
}
