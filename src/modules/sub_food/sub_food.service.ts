import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSubFoodDto } from './dto/create-sub_food.dto.js';
import { UpdateSubFoodDto } from './dto/update-sub_food.dto.js';
import { PrismaService } from '../../prisma/prisma.service.js';

@Injectable()
export class SubFoodService {
  constructor(private readonly prisma: PrismaService) {}

  create(createSubFoodDto: CreateSubFoodDto) {
    return this.prisma.sub_food.create({
      data: createSubFoodDto,
    });
  }

  findAll() {
    return this.prisma.sub_food.findMany({
      include: {
        food: true,
      },
    });
  }

  async findOne(id: number) {
    const subFood = await this.prisma.sub_food.findUnique({
      where: { sub_id: id },
      include: {
        food: true,
      },
    });

    if (!subFood) {
      throw new NotFoundException(`SubFood with ID #${id} not found`);
    }

    return subFood;
  }

  async update(id: number, updateSubFoodDto: UpdateSubFoodDto) {
    await this.findOne(id);
    return this.prisma.sub_food.update({
      where: { sub_id: id },
      data: updateSubFoodDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.sub_food.delete({
      where: { sub_id: id },
    });
  }
}
