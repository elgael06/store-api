import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';

export class FindProductDto extends PartialType(CreateProductDto) {
  @ApiProperty({ required: true })
  id: string;
  update: string;
  create: string;
}
