import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { Category } from 'src/data/models/category.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { BarCode, Product } from 'src/data/models/product.entity';

@Module({
  imports: [SequelizeModule.forFeature([Category, Product, BarCode])],
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}
