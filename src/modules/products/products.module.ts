import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { BarCode, Product } from 'src/data/models/product.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Product, BarCode])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
