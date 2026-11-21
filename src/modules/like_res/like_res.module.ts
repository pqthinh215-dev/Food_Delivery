import { Module } from '@nestjs/common';
import { LikeResService } from './like_res.service.js';
import { LikeResController } from './like_res.controller.js';

@Module({
  controllers: [LikeResController],
  providers: [LikeResService],
})
export class LikeResModule {}
