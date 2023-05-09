import { SequelizeModule } from '@nestjs/sequelize';
import config from '../config';
import { Module } from '@nestjs/common';

const { ...rest } = config();

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: rest.DB_DIALECT,
      port: parseInt(rest.DB_PORT),
      username: rest.DB_USERNAME,
      password: rest.DB_PASSWORD,
      database: rest.DB_DATABASE,
      models: [],
    }),
  ],
  controllers: [],
  providers: [],
})
export class SequelizeConfModule {}
