import { Test, TestingModule } from '@nestjs/testing';
import { OrderFoodController } from './order_food.controller.js';
import { OrderFoodService } from './order_food.service.js';

describe('OrderFoodController', () => {
  let controller: OrderFoodController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderFoodController],
      providers: [OrderFoodService],
    }).compile();

    controller = module.get<OrderFoodController>(OrderFoodController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
