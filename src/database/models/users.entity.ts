import { Model, Column, Table, ForeignKey } from 'sequelize-typescript';
import { Auth } from './auth.entity';

@Table
export class Users extends Model {
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
