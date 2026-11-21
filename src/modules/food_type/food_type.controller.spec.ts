import { Test, TestingModule } from '@nestjs/testing';
import { FoodTypeController } from './food_type.controller.js';
import { FoodTypeService } from './food_type.service.js';

describe('FoodTypeController', () => {
  let controller: FoodTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FoodTypeController],
      providers: [FoodTypeService],
    }).compile();

    controller = module.get<FoodTypeController>(FoodTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
