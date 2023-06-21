import express, {Application, Request, Response} from 'express';
import cors from 'cors';
import helmet from 'helmet';
import {config} from './api/config';
import {contentSecurityPolicy} from './utils/utils';

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
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));

    app.get('/', (req: Request, res: Response) => {
      res.send('Hello World!');
    });

    app.listen(port, () => {
      console.log(`Server is listening on port ${port} in ${env} mode`);
    });
  } catch (e) {
    console.error(e);
  }
})();
