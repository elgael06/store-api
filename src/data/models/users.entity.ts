import {
  Model,
  Column,
  Table,
  PrimaryKey,
  IsUUID,
  HasOne,
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
  email: string;

  @Column({ defaultValue: true })
  isActive: boolean;

  @HasOne(() => Auth, 'idUser')
  auth: Auth;
}
