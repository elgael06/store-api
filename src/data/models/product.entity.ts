import {
  Column,
  ForeignKey,
  HasMany,
  IsUUID,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Category } from './category.entity';

@Table
export class Product extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id: string;

  @Column({ allowNull: false })
  name: string;

  @Column
  description: string;

  @Column
  price: number;

  @Column
  cost: number;

  @Column
  iva: number;

  @Column
  @ForeignKey(() => Category)
  idCategorie: string;

  @HasMany(() => BarCode)
  codes: string[];
}

@Table
export class BarCode extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id: string;

  @Column
  barCode: string;

  @Column
  @ForeignKey(() => Product)
  idProduct: string;
}
