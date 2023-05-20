import { Repository, Sequelize } from 'sequelize-typescript';
import { Auth } from './models/auth.entity';
import { Users } from './models/users.entity';
import { Category } from './models/category.entity';
import { BarCode, Product } from './models/product.entity';

export class Contenxt {
  // repositories
  readonly userRepo: Repository<Users>;
  readonly authRepo: Repository<Auth>;

  // modules
  readonly categoryRepo: Repository<Category>;
  readonly productsRepo: Repository<Product>;
  readonly barcodeRepo: Repository<BarCode>;

  constructor(private readonly sequelize: Sequelize) {
    this.userRepo = this.sequelize.getRepository(Users);
    this.authRepo = this.sequelize.getRepository(Auth);
    this.categoryRepo = this.sequelize.getRepository(Category);
    this.categoryRepo = this.sequelize.getRepository(Category);
    this.productsRepo = sequelize.getRepository(Product);
    this.barcodeRepo = sequelize.getRepository(BarCode);
  }
}
