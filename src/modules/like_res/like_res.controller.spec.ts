import { Test, TestingModule } from '@nestjs/testing';
import { LikeResController } from './like_res.controller.js';
import { LikeResService } from './like_res.service.js';

describe('LikeResController', () => {
  let controller: LikeResController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LikeResController],
      providers: [LikeResService],
    }).compile();

    controller = module.get<LikeResController>(LikeResController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
