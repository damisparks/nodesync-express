import express, {Application, Request, Response} from 'express';
import cors from 'cors';
import helmet from 'helmet';
import {config} from './api/config';
import {contentSecurityPolicy} from './utils/utils';
import {logger} from './infrastructure/logging/logger';

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

    app.use(cors());
    app.use(helmet());

    // Parse incoming requests data
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

    app.get('/', (req: Request, res: Response) => {
      res.send('Hello World! See 👉🏾 /api/v0/');
    });

    // Health URI call
    app.get('/health', async (_req: Request, res: Response) => {
      res.status(200).json({uptime: process.uptime()});
    });

    app.listen(port, () => {
      logger.info(`Server is listening on port ${port} in ${env} mode`);
      logger.info('=================================');
      logger.info(`🚀 NodeSync Express is up and running at ${port}`);
      logger.info('=================================');
      logger.info('press CTRL+C to stop server');
    });
  } catch (e) {
    console.error(e);
  }
})();
