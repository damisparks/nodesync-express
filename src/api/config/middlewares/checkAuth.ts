import {Request, Response, NextFunction} from 'express';
import {logger} from '@/infrastructure/logging/logger';

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  // Check for basic auth header
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const encodedCredentials = authHeader.split(' ')[1];
    const credentials = Buffer.from(encodedCredentials, 'base64').toString(
      'utf-8'
    );
    const [username, password] = credentials.split(':');
    logger.info(`username: ${username}, password: ${password}`);

    // Check username and password
    if (username === 'admin' && password === 'password') {
      next();
      return;
    }
  }

  // Unauthorized
  logger.info('Unauthorized');
  res.setHeader('WWW-Authenticate', 'Basic realm="Restricted"');
  res.status(401).send('Unauthorized');
};
