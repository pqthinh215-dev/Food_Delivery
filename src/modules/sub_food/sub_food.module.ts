import { Module } from '@nestjs/common';
import { SubFoodService } from './sub_food.service.js';
import { SubFoodController } from './sub_food.controller.js';

@Module({
  controllers: [SubFoodController],
  providers: [SubFoodService],
})
export class SubFoodModule {}
