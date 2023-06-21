import {NextFunction, Request, Response} from 'express';

export const notFoundHandler = (
  _req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction
) => {
  const notFound = () => {
    const message = 'Resource not found';
    res.status(404).json({message, code: 'NOT_FOUND'});
  };
  notFound();
};
