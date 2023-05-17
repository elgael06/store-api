import {
  Column,
  HasMany,
  IsUUID,
  Model,
  PrimaryKey,
} from 'sequelize-typescript';
import { Product } from './product.entity';

export class Category extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id: string;

  @Column
  description: string;

  @HasMany(() => Product, 'idCategorie')
  products: Product[];
}
