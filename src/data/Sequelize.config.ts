import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      models: ['./models/**.entity{.ts,.js}'], //'./**/**.entity{.ts,.js}'
      autoLoadModels: true,
      synchronize: true,
      repositoryMode: true,
      // ssl: true,
      // dialectOptions: {
      //   ssl: {
      //     require: true,
      //   },
      // },
    }),
  ],
  controllers: [],
  providers: [],
})
export class SequelizeConfModule {}
