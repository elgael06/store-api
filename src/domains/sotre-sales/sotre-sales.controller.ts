import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SotreSalesService } from './sotre-sales.service';
import { CreateSotreSaleDto } from './dto/create-sotre-sale.dto';
import { UpdateSotreSaleDto } from './dto/update-sotre-sale.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/core/decorators/auth.decorator';
import { Role } from 'src/core/enum/Role';

@ApiTags('sotre-sales')
@ApiBearerAuth()
@Controller('sotre-sales')
export class SotreSalesController {
  constructor(private readonly sotreSalesService: SotreSalesService) {}

  @Post()
  @Auth(Role.Admin, Role.User)
  create(@Body() createSotreSaleDto: CreateSotreSaleDto) {
    return this.sotreSalesService.create(createSotreSaleDto);
  }

  @Get()
  @Auth(Role.Admin, Role.User)
  findAll() {
    return this.sotreSalesService.findAll();
  }

  @Get(':id')
  @Auth(Role.Admin, Role.User)
  findOne(@Param('id') id: string) {
    return this.sotreSalesService.findOne(+id);
  }

  @Patch(':id')
  @Auth(Role.Admin)
  update(
    @Param('id') id: string,
    @Body() updateSotreSaleDto: UpdateSotreSaleDto,
  ) {
    return this.sotreSalesService.update(+id, updateSotreSaleDto);
  }

  @Delete(':id')
  @Auth(Role.Admin)
  remove(@Param('id') id: string) {
    return this.sotreSalesService.remove(+id);
  }
}
