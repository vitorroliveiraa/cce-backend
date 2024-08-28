import dotenv from 'dotenv';
import { Knex } from 'knex';
import path from 'path';
import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

const dotenvFilepath = path.resolve(__dirname, '..', '..', '.env');
dotenv.config({ path: dotenvFilepath });

interface KnexConfig {
  [key: string]: Knex.Config;
}

const knexConfig: KnexConfig = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432'),
      user: process.env.DB_USER || 'admin',
      password: process.env.DB_PWD || 'admin',
      database: process.env.DB_NAME || 'cce-db',
    },
    pool: {
      min: 2, // Mínimo de conexões no pool
      max: 10, // Máximo de conexões no pool
      acquireTimeoutMillis: 30000, // Tempo limite para adquirir uma conexão (em milissegundos)
      idleTimeoutMillis: 60000, // Tempo limite de inatividade para uma conexão (em milissegundos)
      reapIntervalMillis: 1000, // Intervalo para tentativas de reconexão (em milissegundos)
    },
    migrations: {
      tableName: 'knex_migrations',
      extension: 'ts',
      directory: path.resolve(__dirname, 'migrations'),
    },
    seeds: {
      // directory: path.resolve(__dirname, '..', 'src', 'database', 'seeds'),
      directory: './src/database/seeds',
      extension: 'ts',
    },
  },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user: 'username',
  //     password: 'password',
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10,
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations',
  //   },
  // },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user: 'username',
  //     password: 'password',
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10,
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations',
  //   },
  // },
};

export default knexConfig;
