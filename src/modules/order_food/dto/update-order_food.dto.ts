import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderFoodDto } from './create-order_food.dto.js';

export class UpdateOrderFoodDto extends PartialType(CreateOrderFoodDto) {}
