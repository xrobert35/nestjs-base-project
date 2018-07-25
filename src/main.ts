import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WinLogger } from './common/logger/winlogger';
import { Config } from './config/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const logger = WinLogger.get('main');

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger : WinLogger.get('nest'),
  });

  const swaggerActivated = Config.get().SWAGGER_ACTIVATED;
  if (swaggerActivated) {
    const packageJson = require('../package.json');

    const options = new DocumentBuilder()
      .setTitle('Inexys API')
      .setDescription(packageJson.description)
      .setVersion(packageJson.version)
      .setBasePath(Config.get().SERVER_PATH)
      .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup(`${Config.get().SERVER_PATH}/swagger`, app, document);
  }

  const serverPort = Config.get().SERVER_PORT;
  app.setGlobalPrefix(`${Config.get().SERVER_PATH}`);

  await app.listen(Config.get().SERVER_PORT);
  if (swaggerActivated) {
    logger.info('Swagger is activated and is accessible on /api/swagger');
  }
  logger.info(`Server started on port ${serverPort}`);
}
bootstrap();
