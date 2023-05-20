import { Injectable } from '@nestjs/common';
import { Contenxt } from 'src/data/Context';
import { Sequelize } from 'sequelize-typescript';
import { InjectConnection } from '@nestjs/sequelize';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { FindCategoryDto } from './dto/find-category.dto';

@Injectable()
export class CategoriesService {
  // context repositories
  readonly _context: Contenxt;

  constructor(
    @InjectConnection()
    private sequelize: Sequelize,
  ) {
    this._context = new Contenxt(sequelize);
  }

  async create(createCategoryDto: CreateCategoryDto): Promise<FindCategoryDto> {
    const category = await this._context.categoryRepo.create({
      description: createCategoryDto.description,
    });
    return {
      id: category.id,
      description: category.description,
      create: category.createdAt,
      update: category.updatedAt,
    };
  }

  async findAll(): Promise<FindCategoryDto[]> {
    const categories = await this._context.categoryRepo.findAll();
    return categories.map((category) => ({
      id: category.id,
      description: category.description,
      create: category.createdAt,
      update: category.updatedAt,
    }));
  }

  async findOne(id: string): Promise<FindCategoryDto> {
    const category = await this._context.categoryRepo.findOne({
      where: { id },
    });
    return {
      id: category.id,
      description: category.description,
      create: category.createdAt,
      update: category.updatedAt,
    };
  }

  async update(
    id: string,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<string> {
    const category = await this._context.categoryRepo.findOne({
      where: { id },
    });
    category.update({
      ...updateCategoryDto,
    });
    return `This action updates a #${id} category`;
  }

  async remove(id: string): Promise<string> {
    const category = await this._context.categoryRepo.findOne({
      where: { id },
    });
    await category.destroy();
    return `This action removes a #${id} category`;
  }
}
