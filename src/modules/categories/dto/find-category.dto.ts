import { ApiProperty } from '@nestjs/swagger';

export class FindCategoryDto {
  @ApiProperty({ required: false })
  id?: string;
  @ApiProperty({ required: true })
  description: string;
  create?: string;
  update?: string;
}
