import { PartialType } from '@nestjs/mapped-types';
import { CreateSubFoodDto } from './create-sub_food.dto.js';

export class UpdateSubFoodDto extends PartialType(CreateSubFoodDto) {}
