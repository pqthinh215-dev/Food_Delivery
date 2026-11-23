import { Module } from '@nestjs/common';
import { OrderFoodService } from './order_food.service.js';
import { OrderFoodController } from './order_food.controller.js';

@Module({
  controllers: [OrderFoodController],
  providers: [OrderFoodService],
})
export class OrderFoodModule {}
