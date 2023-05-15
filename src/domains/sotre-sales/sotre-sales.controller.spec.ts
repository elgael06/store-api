import { Test, TestingModule } from '@nestjs/testing';
import { SotreSalesController } from './sotre-sales.controller';
import { SotreSalesService } from './sotre-sales.service';

describe('SotreSalesController', () => {
  let controller: SotreSalesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SotreSalesController],
      providers: [SotreSalesService],
    }).compile();

    controller = module.get<SotreSalesController>(SotreSalesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
