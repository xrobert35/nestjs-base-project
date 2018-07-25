import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { FunctionalException } from './functional.exception';
import { WinLogger } from '../logger/winlogger';

@Catch(FunctionalException)
export class FunctionalExceptionFilter implements ExceptionFilter {

  private logger = WinLogger.get('functional-exception');

  catch(exception: FunctionalException, host: ArgumentsHost) {

    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status = exception.status;

    this.logger.error(`${exception.code} - ${exception.libelle}`);

    response
      .status(status)
      .json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
        code: exception.code,
        libelle: exception.libelle,
      });
  }
}
