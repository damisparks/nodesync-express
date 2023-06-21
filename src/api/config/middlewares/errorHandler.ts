import {NextFunction, Request, Response} from 'express';
import {HttpException} from '@/core/error/HttpException';

export const errorHandler = (
  error: HttpException,
  _: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction
) => {
  const {
    status = 500,
    code = 'INTERNAL_ERROR',
    message = 'Internal server error',
  } = error;
  res.status(status).json({message, code});
};
