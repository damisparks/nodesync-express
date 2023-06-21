import dotenv from 'dotenv';
dotenv.config();

const NODE_ENV: string = process.env.NODE_ENV || 'development';
const PORT: string | number = process.env.PORT || 9000;
const DB_URL: string = process.env.MONGO_DB_URL || 'mongodb://localhost:27017';
const MONGO_DB_NAME: string = process.env.MONGO_DB_NAME || 'mosano';
const URL: string = process.env.URL || 'http://localhost:3000';
const SALT: string = process.env.SALT_ROUNDS!;

export default {
  NODE_ENV,
  PORT,
  DB_URL: `${DB_URL}/${MONGO_DB_NAME}`,
  URL,
  SALT,
};
