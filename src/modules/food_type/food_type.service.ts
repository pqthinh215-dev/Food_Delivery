import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFoodTypeDto } from './dto/create-food_type.dto.js';
import { UpdateFoodTypeDto } from './dto/update-food_type.dto.js';
import { PrismaService } from '../../prisma/prisma.service.js';

@Injectable()
export class FoodTypeService {
  constructor(private readonly prisma: PrismaService) {}

  create(createFoodTypeDto: CreateFoodTypeDto) {
    return this.prisma.food_type.create({
      data: createFoodTypeDto,
    });
  }

  findAll() {
    return this.prisma.food_type.findMany({
      include: {
        food: true,
      },
    });
  }

  async findOne(id: number) {
    const foodType = await this.prisma.food_type.findUnique({
      where: { type_id: id },
      include: {
        food: true,
      },
    });

    if (!foodType) {
      throw new NotFoundException(`FoodType with ID #${id} not found`);
    }

    return foodType;
  }

  async update(id: number, updateFoodTypeDto: UpdateFoodTypeDto) {
    await this.findOne(id);
    return this.prisma.food_type.update({
      where: { type_id: id },
      data: updateFoodTypeDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.food_type.delete({
      where: { type_id: id },
    });
  }
}
