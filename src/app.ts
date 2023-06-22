import express, {Application, Request, Response} from 'express';
import cors from 'cors';
import helmet from 'helmet';
import {config} from '@/api/config';
import {contentSecurityPolicy} from '@/utils/utils';
import {logger} from '@/infrastructure/logging/logger';
import {errorHandler, notFoundHandler} from '@/api/config/middlewares';
import {ApiRoute} from '@/api/config/routes';
import {connectDb} from '@/infrastructure/database';

const app: Application = express();

const port = config.PORT;
const env = config.NODE_ENV;

(async () => {
  try {
    // Helmet
    app.use(helmet());

    // Content Security Policy
    app.use(helmet.contentSecurityPolicy(contentSecurityPolicy));

    // Clickjacking Protection
    app.use(helmet.frameguard({action: 'sameorigin'}));

    // DNS Prefetch Control
    app.use(helmet.dnsPrefetchControl());

    // Parse incoming requests data
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

    app.use(cors());

    // Dabase connection
    connectDb(config.DB_URL);
    logger.info(`Database URL: ${config.DB_URL}`);

    app.get('/', (req: Request, res: Response) => {
      res.send('Hello World! See 👉🏾 /api/v0/');
    });

    // Health URI call
    app.get('/health', async (_req: Request, res: Response) => {
      res.status(200).json({uptime: process.uptime()});
    });

    // API routers
    app.use('/api', ApiRoute);

    // Initialise handlers or middleware
    app.use(errorHandler);
    app.use(notFoundHandler);

    app.listen(port, () => {
      logger.info(`Server is listening on port ${port} in ${env} mode`);
      logger.info('=================================');
      logger.info(`🚀 NodeSync Express is up and running at ${port}`);
      logger.info('=================================');
      logger.info('press CTRL+C to stop server');
    });
  } catch (e) {
    logger.error('Error starting server: ', e);
  }
})();
