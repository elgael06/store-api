import { Module } from '@nestjs/common';
import { SotreSalesService } from './sotre-sales.service';
import { SotreSalesController } from './sotre-sales.controller';

@Module({
  controllers: [SotreSalesController],
  providers: [SotreSalesService]
})
export class SotreSalesModule {}
