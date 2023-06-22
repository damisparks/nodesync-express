import {ConnectOptions, connect, connection} from 'mongoose';
import {logger} from '../logging/logger';
import {countrySeedDatabase} from '@/infrastructure/database';

const dbOptions: ConnectOptions = {
  autoIndex: true,
  autoCreate: true,
};

export const connectDb = async (dbUrl: string) => {
  const initDb = () => {
    logger.info('Initializing database connection');
    connect(dbUrl, dbOptions)
      .then(() => {
        logger.info('Successfully connected to database');

        // Seed the database with initial data
        countrySeedDatabase();
      })
      .catch(error => {
        logger.error(`Error connecting to the database. \n${error}`);
        // eslint-disable-next-line no-process-exit
        const exit = process.exit();
        return exit;
      });
  };

  initDb();
  connection.on('disconnected', connect);
};
