import { Test, TestingModule } from '@nestjs/testing';
import { SubFoodService } from './sub_food.service.js';
import { PrismaService } from '../../prisma/prisma.service.js';

describe('SubFoodService', () => {
  let service: SubFoodService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SubFoodService,
        {
          provide: PrismaService,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<SubFoodService>(SubFoodService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
