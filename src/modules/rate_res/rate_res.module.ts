import { Module } from '@nestjs/common';
import { RateResService } from './rate_res.service.js';
import { RateResController } from './rate_res.controller.js';

@Module({
  controllers: [RateResController],
  providers: [RateResService],
})
export class RateResModule {}
