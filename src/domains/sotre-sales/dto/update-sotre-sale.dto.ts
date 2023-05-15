import { PartialType } from '@nestjs/swagger';
import { CreateSotreSaleDto } from './create-sotre-sale.dto';

export class UpdateSotreSaleDto extends PartialType(CreateSotreSaleDto) {}
