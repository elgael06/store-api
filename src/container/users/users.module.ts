import { Module } from '@nestjs/common';
import { Users } from '../../database/models/users.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Auth } from 'src/database/models/auth.entity';

@Module({
  imports: [SequelizeModule.forFeature([Users, Auth])],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [SequelizeModule],
})
export class UsersModule {}
