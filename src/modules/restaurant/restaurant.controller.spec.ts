import { Test, TestingModule } from '@nestjs/testing';
import { RestaurantController } from './restaurant.controller.js';
import { RestaurantService } from './restaurant.service.js';
import { PrismaService } from '../../prisma/prisma.service.js';

describe('RestaurantController', () => {
  let controller: RestaurantController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RestaurantController],
      providers: [
        RestaurantService,
        {
          provide: PrismaService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<RestaurantController>(RestaurantController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
