import { Injectable } from '@nestjs/common';
import { CreateLikeReDto } from './dto/create-like_re.dto.js';
import { UpdateLikeReDto } from './dto/update-like_re.dto.js';

@Injectable()
export class LikeResService {
  create(createLikeReDto: CreateLikeReDto) {
    return 'This action adds a new likeRe';
  }

  findAll() {
    return `This action returns all likeRes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} likeRe`;
  }

  update(id: number, updateLikeReDto: UpdateLikeReDto) {
    return `This action updates a #${id} likeRe`;
  }

  remove(id: number) {
    return `This action removes a #${id} likeRe`;
  }
}
