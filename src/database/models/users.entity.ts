import {
  Model,
  Column,
  Table,
  ForeignKey,
  PrimaryKey,
  IsUUID,
} from 'sequelize-typescript';
import { Auth } from './auth.entity';

@Table
export class Users extends Model {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id: string;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column({
    allowNull: true,
    unique: true,
  })
  @ForeignKey(() => Auth)
  email: string;

  @Column({ defaultValue: true })
  isActive: boolean;
}
