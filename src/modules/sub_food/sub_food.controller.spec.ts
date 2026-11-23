import { Test, TestingModule } from '@nestjs/testing';
import { SubFoodController } from './sub_food.controller.js';
import { SubFoodService } from './sub_food.service.js';
import { PrismaService } from '../../prisma/prisma.service.js';

describe('SubFoodController', () => {
  let controller: SubFoodController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubFoodController],
      providers: [
        SubFoodService,
        {
          provide: PrismaService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<SubFoodController>(SubFoodController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
