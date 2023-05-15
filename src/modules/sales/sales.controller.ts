import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SalesService } from './sales.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/core/decorators/auth.decorator';
import { Role } from 'src/core/enum/Role';

@ApiTags('sales')
@ApiBearerAuth()
@Controller('v1/sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Post()
  @Auth(Role.Admin)
  create(@Body() createSaleDto: CreateSaleDto) {
    return this.salesService.create(createSaleDto);
  }

  @Get()
  @Auth(Role.Admin, Role.User)
  findAll() {
    return this.salesService.findAll();
  }

  @Get(':id')
  @Auth(Role.Admin, Role.User)
  findOne(@Param('id') id: string) {
    return this.salesService.findOne(+id);
  }

  @Patch(':id')
  @Auth(Role.Admin)
  update(@Param('id') id: string, @Body() updateSaleDto: UpdateSaleDto) {
    return this.salesService.update(+id, updateSaleDto);
  }

  @Delete(':id')
  @Auth(Role.Admin)
  remove(@Param('id') id: string) {
    return this.salesService.remove(+id);
  }
}
