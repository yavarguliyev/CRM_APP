import mongoose from 'mongoose';
import config from '../config/config';

const {
  MONGO_DB_NAME,
  MONGO_DB_CONNECTION_URL,
  MONGO_PORT,
  MONGO_INITDB_ROOT_USERNAME,
  MONGO_INITDB_ROOT_PASSWORD,
} = config;

const mongoConnection = async () => {
  if (!MONGO_DB_NAME) {
    throw new Error('MONGO_DB_NAME must be defined');
  }

  if (!MONGO_DB_CONNECTION_URL) {
    throw new Error('MONGO_DB_CONNECTION_URL must be defined');
  }

  if (!MONGO_PORT) {
    throw new Error('MONGO_PORT must be defined');
  }

  if (!MONGO_INITDB_ROOT_USERNAME) {
    throw new Error('MONGO_INITDB_ROOT_USERNAME must be defined');
  }

  if (!MONGO_INITDB_ROOT_PASSWORD) {
    throw new Error('MONGO_INITDB_ROOT_PASSWORD must be defined');
  }

  try {
    await mongoose.connect(`${MONGO_DB_CONNECTION_URL}:${MONGO_PORT}`, {
      dbName: MONGO_DB_NAME,
      user: MONGO_INITDB_ROOT_USERNAME,
      pass: MONGO_INITDB_ROOT_PASSWORD,
    });
    console.log('Connected to MongoDb');
  } catch (error: any) {
    console.log(error.message);
  }
};

export default mongoConnection;
