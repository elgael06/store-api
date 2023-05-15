import { Injectable } from '@nestjs/common';
import { CreateSotreSaleDto } from './dto/create-sotre-sale.dto';
import { UpdateSotreSaleDto } from './dto/update-sotre-sale.dto';

@Injectable()
export class SotreSalesService {
  create(createSotreSaleDto: CreateSotreSaleDto) {
    return 'This action adds a new sotreSale';
  }

  findAll() {
    return `This action returns all sotreSales`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sotreSale`;
  }

  update(id: number, updateSotreSaleDto: UpdateSotreSaleDto) {
    return `This action updates a #${id} sotreSale`;
  }

  remove(id: number) {
    return `This action removes a #${id} sotreSale`;
  }
}
