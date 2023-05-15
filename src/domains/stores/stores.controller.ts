import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StoresService } from './stores.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/core/decorators/auth.decorator';
import { Role } from 'src/core/enum/Role';

@ApiTags('sotres')
@ApiBearerAuth()
@Controller('v1/stores')
export class StoresController {
  constructor(private readonly storesService: StoresService) {}

  @Post()
  @Auth(Role.Admin)
  create(@Body() createStoreDto: CreateStoreDto) {
    return this.storesService.create(createStoreDto);
  }

  @Get()
  @Auth(Role.Admin, Role.User)
  findAll() {
    return this.storesService.findAll();
  }

  @Get(':id')
  @Auth(Role.Admin, Role.User)
  findOne(@Param('id') id: string) {
    return this.storesService.findOne(+id);
  }

  @Patch(':id')
  @Auth(Role.Admin)
  update(@Param('id') id: string, @Body() updateStoreDto: UpdateStoreDto) {
    return this.storesService.update(+id, updateStoreDto);
  }

  @Delete(':id')
  @Auth(Role.Admin)
  remove(@Param('id') id: string) {
    return this.storesService.remove(+id);
  }
}
