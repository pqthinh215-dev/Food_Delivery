import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto.js';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto.js';
import { PrismaService } from '../../prisma/prisma.service.js';

@Injectable()
export class RestaurantService {
  constructor(private readonly prisma: PrismaService) {}

  create(createRestaurantDto: CreateRestaurantDto) {
    return this.prisma.restaurant.create({
      data: createRestaurantDto,
    });
  }

  findAll() {
    return this.prisma.restaurant.findMany({
      include: {
        like_res: true,
        rate_res: true,
      },
    });
  }

  async findOne(id: number) {
    const restaurant = await this.prisma.restaurant.findUnique({
      where: { res_id: id },
      include: {
        like_res: true,
        rate_res: true,
      },
    });

    if (!restaurant) {
      throw new NotFoundException(`Restaurant with ID #${id} not found`);
    }

    return restaurant;
  }

  async update(id: number, updateRestaurantDto: UpdateRestaurantDto) {
    await this.findOne(id);
    return this.prisma.restaurant.update({
      where: { res_id: id },
      data: updateRestaurantDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.restaurant.delete({
      where: { res_id: id },
    });
  }
}
