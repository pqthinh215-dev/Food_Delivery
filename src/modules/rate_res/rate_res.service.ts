import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRateReDto } from './dto/create-rate_re.dto.js';
import { UpdateRateReDto } from './dto/update-rate_re.dto.js';
import { PrismaService } from '../../prisma/prisma.service.js';

@Injectable()
export class RateResService {
  constructor(private readonly prisma: PrismaService) {}

  create(createRateReDto: CreateRateReDto) {
    return this.prisma.rate_res.create({
      data: {
        user_id: createRateReDto.user_id,
        res_id: createRateReDto.res_id,
        amount: createRateReDto.amount,
        date_rate: createRateReDto.date_rate ?? new Date(),
      },
      include: {
        user: {
          select: {
            user_id: true,
            fullname: true,
            email: true,
          },
        },
        restaurant: true,
      },
    });
  }

  findAll() {
    return this.prisma.rate_res.findMany({
      include: {
        user: {
          select: {
            user_id: true,
            fullname: true,
            email: true,
          },
        },
        restaurant: true,
      },
    });
  }

  async findOne(id: number) {
    const rate = await this.prisma.rate_res.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            user_id: true,
            fullname: true,
            email: true,
          },
        },
        restaurant: true,
      },
    });

    if (!rate) {
      throw new NotFoundException(`Rate with ID #${id} not found`);
    }

    return rate;
  }

  async update(id: number, updateRateReDto: UpdateRateReDto) {
    await this.findOne(id);
    return this.prisma.rate_res.update({
      where: { id },
      data: updateRateReDto,
      include: {
        user: {
          select: {
            user_id: true,
            fullname: true,
            email: true,
          },
        },
        restaurant: true,
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.rate_res.delete({
      where: { id },
    });
  }
}
