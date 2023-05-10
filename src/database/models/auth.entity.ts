import { Column, Model, Table, BelongsTo } from 'sequelize-typescript';
import { Users } from './users.entity';

@Table
export class Auth extends Model {
  @Column
  email: string;
  @Column
  password: string;

  @BelongsTo(() => Users, 'email')
  user: Users;
}
