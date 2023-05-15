import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { TerminusModule } from '@nestjs/terminus';
// services
import { AppService } from './app.service';
// database
import { SequelizeConfModule } from 'src/data/Sequelize.config';
// modules
import { AppController } from './app.controller';
import { AuthModule } from 'src/core/auth/auth.module';
import { UsersModule } from 'src/modules/users/users.module';
import { SalesModule } from '../../modules/sales/sales.module';
import { StoresModule } from '../../modules/stores/stores.module';
import { CategoriesModule } from '../../modules/categories/categories.module';
import { InventoriesModule } from '../../modules/inventories/inventories.module';

@Module({
  imports: [
    HttpModule,
    TerminusModule,
    SequelizeConfModule,
    JwtModule.register({
      global: true,
      secret: process.env.AUTH_SECRET,
      signOptions: { expiresIn: '60m' },
    }),
    ConfigModule.forRoot(),
    // businesses
    StoresModule,
    CategoriesModule,
    SalesModule,
    InventoriesModule,
    // security.
    AuthModule,
    UsersModule,
  ],
  exports: [],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
