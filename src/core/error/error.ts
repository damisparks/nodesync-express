export enum ServerErrorEnums {
  COUNTRIES_NOT_FOUND = 'COUNTRIES_NOT_FOUND',
  COUNTRY_NOT_FOUND = 'COUNTRY_NOT_FOUND',
  INTERNAL_ERROR = 'INTERNAL_ERROR',
  UNABLE_TO_PROCESS_REQUEST = 'UNABLE_TO_PROCESS_REQUEST',
  UNAUTHORIZED_TO_VIEW_RESOURCE = 'UNAUTHORIZED_TO_VIEW_RESOURCE',
  INVALID_FORMAT = 'INVALID_FORMAT',
  FORBIDDEN = 'FORBIDDEN',
  INVALID_TOKEN = 'INVALID_TOKEN',
}

export type ServerError = keyof typeof ServerErrorEnums;

export enum ClientErrorCode {
  UNAUTHORIZED_TO_VIEW_RESOURCE = 'UNAUTHORIZED_TO_VIEW_RESOURCE',
  FORBIDDEN = 'FORBIDDEN',
  INVALID_TOKEN = 'INVALID_TOKEN',
  COUNTRIES_NOT_FOUND = 'COUNTRIES_NOT_FOUND',
  COUNTRY_NOT_FOUND = 'COUNTRY_NOT_FOUND',
  INTERNAL_ERROR = 'INTERNAL_ERROR',
  UNABLE_TO_PROCESS_REQUEST = 'UNABLE_TO_PROCESS_REQUEST',
  INVALID_FORMAT = 'INVALID_FORMAT',
}

export type ErrorCode = ServerErrorEnums | ClientErrorCode;

export type ErrorMap<ErrorCode extends string> = {
  readonly [K in ErrorCode]: string;
};

export const ERRORS: ErrorMap<ErrorCode> = {
  [ClientErrorCode.UNAUTHORIZED_TO_VIEW_RESOURCE]:
    'Unauthorised to view this resource.',
  [ClientErrorCode.FORBIDDEN]: 'Forbidden.',
  [ClientErrorCode.INVALID_TOKEN]: 'Invalid token.',
  [ClientErrorCode.COUNTRIES_NOT_FOUND]: 'Countries not found.',
  [ServerErrorEnums.COUNTRY_NOT_FOUND]: 'Country not found.',
  [ServerErrorEnums.INTERNAL_ERROR]: 'Internal error.',
  [ServerErrorEnums.UNABLE_TO_PROCESS_REQUEST]: 'Unable to process request.',
  [ServerErrorEnums.INVALID_FORMAT]: 'Invalid format.',
};
