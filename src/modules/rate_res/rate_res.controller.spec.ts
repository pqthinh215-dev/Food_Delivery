import { Test, TestingModule } from '@nestjs/testing';
import { RateResController } from './rate_res.controller.js';
import { RateResService } from './rate_res.service.js';
import { PrismaService } from '../../prisma/prisma.service.js';

describe('RateResController', () => {
  let controller: RateResController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RateResController],
      providers: [
        RateResService,
        {
          provide: PrismaService,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<RateResController>(RateResController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
