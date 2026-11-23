import { Test, TestingModule } from '@nestjs/testing';
import { FoodTypeService } from './food_type.service.js';
import { PrismaService } from '../../prisma/prisma.service.js';

describe('FoodTypeService', () => {
  let service: FoodTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FoodTypeService,
        {
          provide: PrismaService,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<FoodTypeService>(FoodTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
