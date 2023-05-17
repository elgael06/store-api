import {
  Column,
  ForeignKey,
  HasMany,
  IsUUID,
  Model,
  PrimaryKey,
} from 'sequelize-typescript';
import { Category } from './category.entity';

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
