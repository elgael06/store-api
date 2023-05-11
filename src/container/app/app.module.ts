import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AuthModule } from '../auth/auth.module';
import { UsersModule } from '../users/users.module';
import { SequelizeConfModule } from 'src/database/Sequelize.config';
import { UsersRepositoryService } from './../../repository/usersrepository.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeConfModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [UsersRepositoryService, AppService],
})
export class AppModule {}
