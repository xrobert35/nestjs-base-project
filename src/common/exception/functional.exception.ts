export class FunctionalException extends Error {

  constructor(public code: string,
              public libelle: string,
              public status?: string) {
    super();
    if (!status) {
      this.status = '400';
    }
  }

}
