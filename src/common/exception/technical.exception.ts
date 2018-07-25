export class TechnicalException extends Error {

  constructor(public code: string,
              public libelle: string,
              public error?: any,
              public status?: string) {
    super();
    if (!status) {
      this.status = '400';
    }
  }

}
