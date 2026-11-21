import { Test, TestingModule } from '@nestjs/testing';
import { SubFoodService } from './sub_food.service.js';

describe('SubFoodService', () => {
  let service: SubFoodService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubFoodService],
    }).compile();

    service = module.get<SubFoodService>(SubFoodService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
