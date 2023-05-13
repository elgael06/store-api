import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { TerminusModule } from '@nestjs/terminus';
// modules
import { AppController } from './app.controller';
import { AuthModule } from 'src/domains/auth/auth.module';
import { UsersModule } from 'src/domains/users/users.module';
// database
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
