import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UpdateUserDto } from './dto/update-user.dto.js';
import { PrismaService } from '../../prisma/prisma.service.js';
import bcrypt from 'bcrypt';


@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createUserDto: CreateUserDto) {
    
    const existingUser = await this.prisma.user.findFirst({
      where: { email: createUserDto.email },
    });

    if (existingUser) {
      throw new ConflictException('Email đã được sử dụng');
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(createUserDto.password, saltRounds);

    return this.prisma.user.create({
      data: {
        fullname: createUserDto.fullname,
        email: createUserDto.email,
        password: hashedPassword, 
      },
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

    if (updateUserDto.email) {
      const emailExists = await this.prisma.user.findFirst({
        where: {
          email: updateUserDto.email,
          user_id: { not: id },
        },
      });

      if (emailExists) {
        throw new ConflictException('Email đã được người dùng khác sử dụng');
      }
    }

    const dataToUpdate = Object.assign({}, updateUserDto);
    if (updateUserDto.password) {
      const saltRounds = 10;
      dataToUpdate.password = await bcrypt.hash(updateUserDto.password, saltRounds);
    }

    return this.prisma.user.update({
      where: { user_id: id },
      data: dataToUpdate,
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
