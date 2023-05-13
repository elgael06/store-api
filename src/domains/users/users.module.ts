import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeModule } from '@nestjs/sequelize';
// entities
import { Auth } from 'src/data/models/auth.entity';
import { Users } from 'src/data/models/users.entity';

@Module({
  imports: [SequelizeModule.forFeature([Users, Auth])],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [SequelizeModule],
})
export class UsersModule {}
