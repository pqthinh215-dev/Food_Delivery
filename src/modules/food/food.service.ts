import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFoodDto } from './dto/create-food.dto.js';
import { UpdateFoodDto } from './dto/update-food.dto.js';
import { PrismaService } from '../../prisma/prisma.service.js';

@Injectable()
export class FoodService {
  constructor(private readonly prisma: PrismaService) {}

  create(createFoodDto: CreateFoodDto) {
    return this.prisma.food.create({
      data: createFoodDto,
    });
  }

  findAll() {
    return this.prisma.food.findMany({
      include: {
        food_type: true,
        sub_food: true,
      },
    });
  }

  async findOne(id: number) {
    const food = await this.prisma.food.findUnique({
      where: { food_id: id },
      include: {
        food_type: true,
        sub_food: true,
      },
    });

    if (!food) {
      throw new NotFoundException(`Food with ID #${id} not found`);
    }

    return food;
  }

  async update(id: number, updateFoodDto: UpdateFoodDto) {
    await this.findOne(id);
    return this.prisma.food.update({
      where: { food_id: id },
      data: updateFoodDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.food.delete({
      where: { food_id: id },
    });
  }
}
