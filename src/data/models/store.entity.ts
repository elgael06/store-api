import {
  Column,
  HasMany,
  IsUUID,
  Model,
  PrimaryKey,
} from 'sequelize-typescript';
import { Sale } from './sale.entity';

export class Store extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id: string;

  @Column({ unique: true })
  name: string;

  @Column
  direction: string;

  @Column({ defaultValue: true })
  isActive: boolean;

  @HasMany(() => Sale, 'idStore')
  sales: Sale[];
}
