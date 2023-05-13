import { Repository, Sequelize } from 'sequelize-typescript';
import { Users } from './models/users.entity';
import { Auth } from './models/auth.entity';

export class Contenxt {
  // repositories
  readonly userRepo: Repository<Users>;
  readonly authRepo: Repository<Auth>;

  constructor(private readonly sequelize: Sequelize) {
    this.userRepo = this.sequelize.getRepository(Users);
    this.authRepo = this.sequelize.getRepository(Auth);
  }
}
