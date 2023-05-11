import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AuthModule } from '../auth/auth.module';
import { TerminusModule } from '@nestjs/terminus';
import { UsersModule } from '../users/users.module';
import { SequelizeConfModule } from 'src/database/Sequelize.config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeConfModule,
    AuthModule,
    UsersModule,
    TerminusModule,
    HttpModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
