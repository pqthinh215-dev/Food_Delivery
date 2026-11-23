import { Injectable } from '@nestjs/common';
import { CreateOrderFoodDto } from './dto/create-order_food.dto.js';
import { UpdateOrderFoodDto } from './dto/update-order_food.dto.js';

@Injectable()
export class OrderFoodService {
  create(createOrderFoodDto: CreateOrderFoodDto) {
    return 'This action adds a new orderFood';
  }

  findAll() {
    return `This action returns all orderFood`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orderFood`;
  }

  update(id: number, updateOrderFoodDto: UpdateOrderFoodDto) {
    return `This action updates a #${id} orderFood`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderFood`;
  }
}
