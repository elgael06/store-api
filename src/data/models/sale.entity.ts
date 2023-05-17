import {
  Column,
  ForeignKey,
  HasMany,
  HasOne,
  IsUUID,
  Model,
  PrimaryKey,
} from 'sequelize-typescript';
import { Store } from './store.entity';
import { Product } from './product.entity';

export class Sale extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id: string;

  @Column
  @ForeignKey(() => Store)
  idStore: string;

  @Column({ defaultValue: 'publico general' })
  cliente: string;

  @Column({ defaultValue: 0 })
  numeroProductos: number;

  @Column({ defaultValue: 0 })
  total: number;

  @Column({ defaultValue: 0 })
  totalIva: number;

  @HasMany(() => ProductSale, 'idSale')
  products: ProductSale[];
}

export class ProductSale extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id: string;

  @Column
  @ForeignKey(() => Sale)
  idSale: string;

  @Column
  productId: string;

  @Column({ defaultValue: 0 })
  piezas: number;

  @Column({ defaultValue: 0 })
  total: number;

  @Column({ defaultValue: 0 })
  Iva: number;

  @HasOne(() => Product)
  products: Product;
}
