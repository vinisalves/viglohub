import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export const dataSourceOptions: DataSourceOptions = {
  type:
    (process.env.DB_TYPE as
      | 'postgres'
      | 'mysql'
      | 'sqlite'
      | 'mariadb'
      | 'mongodb'
      | 'oracle'
      | 'mssql') || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,

  entities: ['dist/**/*.entity.js'],

  migrations: ['dist/src/migrations/*.js'],
  migrationsTableName: 'migrations',

  synchronize: false,
  logging: process.env.DB_LOGGING === 'true',
};

export const AppDataSource = new DataSource(dataSourceOptions);
