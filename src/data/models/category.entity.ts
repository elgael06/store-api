import {
  Column,
  HasMany,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Product } from './product.entity';

@Table
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
