import { Module } from '@nestjs/common';
import { FoodTypeService } from './food_type.service.js';
import { FoodTypeController } from './food_type.controller.js';

@Module({
  controllers: [FoodTypeController],
  providers: [FoodTypeService],
})
export class FoodTypeModule {}
