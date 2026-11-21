import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RateResService } from './rate_res.service.js';
import { CreateRateReDto } from './dto/create-rate_re.dto.js';
import { UpdateRateReDto } from './dto/update-rate_re.dto.js';

@Controller('rate-res')
export class RateResController {
  constructor(private readonly rateResService: RateResService) {}

  @Post()
  create(@Body() createRateReDto: CreateRateReDto) {
    return this.rateResService.create(createRateReDto);
  }

  @Get()
  findAll() {
    return this.rateResService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rateResService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRateReDto: UpdateRateReDto) {
    return this.rateResService.update(+id, updateRateReDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rateResService.remove(+id);
  }
}
