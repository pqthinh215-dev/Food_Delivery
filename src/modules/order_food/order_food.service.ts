import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrderFoodDto } from './dto/create-order_food.dto.js';
import { UpdateOrderFoodDto } from './dto/update-order_food.dto.js';
import { PrismaService } from '../../prisma/prisma.service.js';

@Injectable()
export class OrderFoodService {
  constructor(private readonly prisma: PrismaService) {}

  create(createOrderFoodDto: CreateOrderFoodDto) {
    const { arr_sub_id, ...rest } = createOrderFoodDto;
    const formattedArrSubId = Array.isArray(arr_sub_id)
      ? JSON.stringify(arr_sub_id)
      : (typeof arr_sub_id === 'string' ? arr_sub_id : null);

    return this.prisma.order_food.create({
      data: {
        ...rest,
        arr_sub_id: formattedArrSubId,
      },
      include: {
        user: {
          select: {
            user_id: true,
            fullname: true,
            email: true,
          },
        },
        food: true,
      },
    });
  }

  findAll() {
    return this.prisma.order_food.findMany({
      include: {
        user: {
          select: {
            user_id: true,
            fullname: true,
            email: true,
          },
        },
        food: true,
      },
    });
  }

  async findOne(id: number) {
    const order = await this.prisma.order_food.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            user_id: true,
            fullname: true,
            email: true,
          },
        },
        food: true,
      },
    });

    if (!order) {
      throw new NotFoundException(`Order with ID #${id} not found`);
    }

    return order;
  }

  async update(id: number, updateOrderFoodDto: UpdateOrderFoodDto) {
    await this.findOne(id);
    const { arr_sub_id, ...rest } = updateOrderFoodDto;
    const data: Record<string, any> = { ...rest };

    if (arr_sub_id !== undefined) {
      data.arr_sub_id = Array.isArray(arr_sub_id)
        ? JSON.stringify(arr_sub_id)
        : (typeof arr_sub_id === 'string' ? arr_sub_id : null);
    }

    return this.prisma.order_food.update({
      where: { id },
      data,
      include: {
        user: {
          select: {
            user_id: true,
            fullname: true,
            email: true,
          },
        },
        food: true,
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.order_food.delete({
      where: { id },
    });
  }
}
