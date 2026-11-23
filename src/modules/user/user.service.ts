import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { PrismaService } from '../../prisma/prisma.service.js';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({
      data: createUserDto,
      select: {
        user_id: true,
        fullname: true,
        email: true,
      },
    });
  }

  findAll() {
    return this.prisma.user.findMany({
      select: {
        user_id: true,
        fullname: true,
        email: true,
      },
    });
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { user_id: id },
      select: {
        user_id: true,
        fullname: true,
        email: true,
        like_res: true,
        rate_res: true,
        order_food: true,
      },
    });

    if (!user) {
      throw new NotFoundException(`User with ID #${id} not found`);
    }

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.findOne(id);
    return this.prisma.user.update({
      where: { user_id: id },
      data: updateUserDto,
      select: {
        user_id: true,
        fullname: true,
        email: true,
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.user.delete({
      where: { user_id: id },
      select: {
        user_id: true,
        fullname: true,
        email: true,
      },
    });
  }
}
