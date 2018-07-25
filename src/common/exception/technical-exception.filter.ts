import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { TechnicalException } from './technical.exception';
import { WinLogger } from '../logger/winlogger';

@Catch(TechnicalException)
export class TechnicalExceptionFilter implements ExceptionFilter {

  private logger = WinLogger.get('technical-exception');

  catch(exception: TechnicalException, host: ArgumentsHost) {

    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const status = exception.status;

    this.logger.error(exception.libelle, exception.error);

    response
      .status(status)
      .json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
        code: exception.code,
        libelle: exception.libelle,
        error: exception.error,
      });
  }
}
