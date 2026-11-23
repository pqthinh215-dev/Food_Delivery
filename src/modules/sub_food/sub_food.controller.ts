import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubFoodService } from './sub_food.service.js';
import { CreateSubFoodDto } from './dto/create-sub_food.dto.js';
import { UpdateSubFoodDto } from './dto/update-sub_food.dto.js';

@Controller('sub-food')
export class SubFoodController {
  constructor(private readonly subFoodService: SubFoodService) {}

  @Post()
  create(@Body() createSubFoodDto: CreateSubFoodDto) {
    return this.subFoodService.create(createSubFoodDto);
  }

  @Get()
  findAll() {
    return this.subFoodService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subFoodService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubFoodDto: UpdateSubFoodDto) {
    return this.subFoodService.update(+id, updateSubFoodDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.subFoodService.remove(+id);
  }
}
