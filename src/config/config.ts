import { env } from 'process';

const config = {
  MONGO_DB_NAME: env.MONGO_DB_NAME || 'command_line_app',
  MONGO_DB_CONNECTION_URL: env.MONGO_DB_CONNECTION_URL || 'mongodb://localhost',
  MONGO_PORT: env.MONGO_PORT || 27017,
  MONGO_INITDB_ROOT_USERNAME:
    env.MONGO_INITDB_ROOT_USERNAME || 'command_line_app',
  MONGO_INITDB_ROOT_PASSWORD:
    env.MONGO_INITDB_ROOT_PASSWORD || 'skfdl*kjr1!AD1l12kf034939',
};

export default config;
