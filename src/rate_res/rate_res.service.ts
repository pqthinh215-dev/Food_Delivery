import { Injectable } from '@nestjs/common';
import { CreateRateReDto } from './dto/create-rate_re.dto.js';
import { UpdateRateReDto } from './dto/update-rate_re.dto.js';

@Injectable()
export class RateResService {
  create(createRateReDto: CreateRateReDto) {
    return 'This action adds a new rateRe';
  }

  findAll() {
    return `This action returns all rateRes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rateRe`;
  }

  update(id: number, updateRateReDto: UpdateRateReDto) {
    return `This action updates a #${id} rateRe`;
  }

  remove(id: number) {
    return `This action removes a #${id} rateRe`;
  }
}
