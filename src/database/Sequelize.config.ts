import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { Users } from './models/users.entity';
import { ConfigModule } from '@nestjs/config';
import { Auth } from './models/auth.entity';

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
      models: [Users, Auth], //'./**/**.entity{.ts,.js}'
      autoLoadModels: true,
      synchronize: true,
      ssl: true,
      dialectOptions: {
        ssl: {
          require: true,
        },
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class SequelizeConfModule {}
