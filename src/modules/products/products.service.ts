import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectConnection } from '@nestjs/sequelize';
import { Contenxt } from 'src/data/Context';
import { Sequelize } from 'sequelize-typescript';
import { FindProductDto } from './dto/find-product.dto';
import { Op } from 'sequelize';

@Injectable()
export class ProductsService {
  // context repositories
  readonly _context: Contenxt;

  constructor(
    @InjectConnection()
    private sequelize: Sequelize,
  ) {
    this._context = new Contenxt(sequelize);
  }
  async create(createProductDto: CreateProductDto): Promise<FindProductDto> {
    const product = await this._context.productsRepo.create({
      ...createProductDto,
    });
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      cost: product.cost,
      price: product.price,
      iva: product.iva,
      create: product.createdAt,
      update: product.updatedAt,
    };
  }

  async findAll(): Promise<FindProductDto[]> {
    const products = await this._context.productsRepo.findAll();
    return products.map((product) => ({
      id: product.id,
      name: product.name,
      description: product.description,
      cost: product.cost,
      price: product.price,
      iva: product.iva,
      create: product.createdAt,
      update: product.updatedAt,
    }));
  }

  async findOne(id: string): Promise<FindProductDto> {
    const product = await this._context.productsRepo.findOne({ where: { id } });
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      cost: product.cost,
      price: product.price,
      iva: product.iva,
      create: product.createdAt,
      update: product.updatedAt,
    };
  }

  async findName(name: string): Promise<FindProductDto[]> {
    const products = await this._context.productsRepo.findAll({
      where: { name: { [Op.like]: `%${name}%` } },
    });
    return products.map((product) => ({
      id: product.id,
      name: product.name,
      description: product.description,
      cost: product.cost,
      price: product.price,
      iva: product.iva,
      create: product.createdAt,
      update: product.updatedAt,
    }));
  }

  async findDescription(description: string): Promise<FindProductDto[]> {
    const products = await this._context.productsRepo.findAll({
      where: { description: { [Op.like]: `%${description}%` } },
    });
    return products.map((product) => ({
      id: product.id,
      name: product.name,
      description: product.description,
      cost: product.cost,
      price: product.price,
      iva: product.iva,
      create: product.createdAt,
      update: product.updatedAt,
    }));
  }

  async findCategorie(categoryId: string): Promise<FindProductDto[]> {
    const products = await this._context.productsRepo.findAll({
      where: { idCategorie: categoryId },
    });
    return products.map((product) => ({
      id: product.id,
      name: product.name,
      description: product.description,
      cost: product.cost,
      price: product.price,
      iva: product.iva,
      create: product.createdAt,
      update: product.updatedAt,
    }));
  }

  async findBarcode(code: string): Promise<FindProductDto> {
    const codes = await this._context.barcodeRepo.findOne({
      where: { barCode: code },
    });
    return await this.findOne(codes.idProduct);
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const product = await this._context.productsRepo.findOne({ where: { id } });
    await product.update({ ...updateProductDto });
    return `This action updates a #${id} product`;
  }

  async remove(id: string) {
    const product = await this._context.productsRepo.findOne({ where: { id } });
    await product.destroy();
    return `This action removes a #${id} product`;
  }
}
