import { WinLogger } from '../common/logger/winlogger';

const urlJoin = require('url-join');
const jsonOverride = require('json-override');

export class Config {

  private static instance: Config;

  private config: {
    MONGO_URL: string,
    SERVER_PORT: string,
    SERVER_PATH: string,
    LOG_LEVEL: string,
    SWAGGER_ACTIVATED: string,
    AUTH_JWT_KEY: string, // JWT secret key to share with an auth service
  };

  private constructor() {
  }

  public static get() {
    if (!this.instance) {
      this.instance = new Config();
      this.instance.init();
    }
    return this.instance.config;
  }

  private init() {
    // get config folder
    const server_config_folder = process.env.NODE_SERVER_CONFIG_FOLDER || '.';

    // Read the default.js file
    this.config = this.getConfig(server_config_folder, 'default.js').config;

    const nodeEnv = process.env.NODE_ENV;

    if (nodeEnv) {
      WinLogger.get('config').info(`Loading ${nodeEnv} configuration`);
      try {
        const override = this.getConfig(server_config_folder, `${nodeEnv}.js`).config;
        jsonOverride(this.config, override);
      } catch (error) {
        WinLogger.get('config').warn(`No configuration found for ${nodeEnv}`);
      }
    }
  }

  private getConfig(path, configName) {
    return require(urlJoin(path, configName));
  }
}
