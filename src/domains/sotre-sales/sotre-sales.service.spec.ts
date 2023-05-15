import { Test, TestingModule } from '@nestjs/testing';
import { SotreSalesService } from './sotre-sales.service';

describe('SotreSalesService', () => {
  let service: SotreSalesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SotreSalesService],
    }).compile();

    service = module.get<SotreSalesService>(SotreSalesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
