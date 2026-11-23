import { Test, TestingModule } from '@nestjs/testing';
import { OrderFoodService } from './order_food.service.js';
import { PrismaService } from '../../prisma/prisma.service.js';

describe('OrderFoodService', () => {
  let service: OrderFoodService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrderFoodService,
        {
          provide: PrismaService,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<OrderFoodService>(OrderFoodService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
