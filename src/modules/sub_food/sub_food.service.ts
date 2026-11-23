import { Injectable } from '@nestjs/common';
import { CreateSubFoodDto } from './dto/create-sub_food.dto.js';
import { UpdateSubFoodDto } from './dto/update-sub_food.dto.js';

@Injectable()
export class SubFoodService {
  create(createSubFoodDto: CreateSubFoodDto) {
    return 'This action adds a new subFood';
  }

  findAll() {
    return `This action returns all subFood`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subFood`;
  }

  update(id: number, updateSubFoodDto: UpdateSubFoodDto) {
    return `This action updates a #${id} subFood`;
  }

  remove(id: number) {
    return `This action removes a #${id} subFood`;
  }
}
