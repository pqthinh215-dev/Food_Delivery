import { Test, TestingModule } from '@nestjs/testing';
import { FoodController } from './food.controller.js';
import { FoodService } from './food.service.js';
import { PrismaService } from '../../prisma/prisma.service.js';

describe('FoodController', () => {
  let controller: FoodController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FoodController],
      providers: [
        FoodService,
        {
          provide: PrismaService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<FoodController>(FoodController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
