import {ERRORS, ServerError} from './error';

class HttpException<T = any> extends Error {
  public readonly status: number;
  public readonly message: string;
  public readonly data: T;
  public readonly code: ServerError;

  constructor(
    status: number,
    message: string,
    code: ServerError | null = null,
    data: any = null
  ) {
    super(message);
    this.status = status;
    this.message = message;
    this.data = data;
    this.code = (code as ServerError) || null;
    Object.setPrototypeOf(this, HttpException.prototype);
  }
}

class CountryNotFoundError extends HttpException {
  constructor() {
    super(403, ERRORS['COUNTRY_NOT_FOUND'], 'COUNTRY_NOT_FOUND');
  }
}

class CountriesNotFoundError extends HttpException {
  constructor() {
    super(403, ERRORS['COUNTRIES_NOT_FOUND'], 'COUNTRIES_NOT_FOUND');
  }
}

export {HttpException, CountryNotFoundError, CountriesNotFoundError};
