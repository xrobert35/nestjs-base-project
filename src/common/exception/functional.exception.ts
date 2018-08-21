import { HttpStatus } from '@nestjs/common';

export class FunctionalException extends Error {

  constructor(public code: string,
              public libelle: string,
              public status?: HttpStatus) {
    super();
    if (!status) {
      this.status = HttpStatus.BAD_REQUEST;
    }
  }

}
