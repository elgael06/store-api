import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { Auth } from 'src/data/models/auth.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Auth])],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
