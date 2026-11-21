import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LikeResService } from './like_res.service.js';
import { CreateLikeReDto } from './dto/create-like_re.dto.js';
import { UpdateLikeReDto } from './dto/update-like_re.dto.js';

@Controller('like-res')
export class LikeResController {
  constructor(private readonly likeResService: LikeResService) {}

  @Post()
  create(@Body() createLikeReDto: CreateLikeReDto) {
    return this.likeResService.create(createLikeReDto);
  }

  @Get()
  findAll() {
    return this.likeResService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.likeResService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLikeReDto: UpdateLikeReDto) {
    return this.likeResService.update(+id, updateLikeReDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.likeResService.remove(+id);
  }
}
