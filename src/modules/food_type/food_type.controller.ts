import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FoodTypeService } from './food_type.service.js';
import { CreateFoodTypeDto } from './dto/create-food_type.dto.js';
import { UpdateFoodTypeDto } from './dto/update-food_type.dto.js';

@Controller('food-type')
export class FoodTypeController {
  constructor(private readonly foodTypeService: FoodTypeService) {}

  @Post()
  create(@Body() createFoodTypeDto: CreateFoodTypeDto) {
    return this.foodTypeService.create(createFoodTypeDto);
  }

  @Get()
  findAll() {
    return this.foodTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.foodTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFoodTypeDto: UpdateFoodTypeDto) {
    return this.foodTypeService.update(+id, updateFoodTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.foodTypeService.remove(+id);
  }
}
