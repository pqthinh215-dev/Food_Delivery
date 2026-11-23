import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLikeReDto } from './dto/create-like_re.dto.js';
import { UpdateLikeReDto } from './dto/update-like_re.dto.js';
import { PrismaService } from '../../prisma/prisma.service.js';

@Injectable()
export class LikeResService {
  constructor(private readonly prisma: PrismaService) {}

  create(createLikeReDto: CreateLikeReDto) {
    return this.prisma.like_res.create({
      data: {
        user_id: createLikeReDto.user_id,
        res_id: createLikeReDto.res_id,
        date_like: createLikeReDto.date_like ?? new Date(),
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
    return this.prisma.like_res.findMany({
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
    const like = await this.prisma.like_res.findUnique({
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

    if (!like) {
      throw new NotFoundException(`Like with ID #${id} not found`);
    }

    return like;
  }

  async update(id: number, updateLikeReDto: UpdateLikeReDto) {
    await this.findOne(id);
    return this.prisma.like_res.update({
      where: { id },
      data: updateLikeReDto,
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
    return this.prisma.like_res.delete({
      where: { id },
    });
  }
}
