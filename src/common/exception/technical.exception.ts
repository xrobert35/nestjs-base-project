import { HttpStatus } from '@nestjs/common';

export class TechnicalException extends Error {

  constructor(public code: string,
              public libelle: string,
              public error?: any,
              public status?: HttpStatus) {
    super();
    if (!status) {
      this.status = HttpStatus.BAD_REQUEST;
    }
  }

}
