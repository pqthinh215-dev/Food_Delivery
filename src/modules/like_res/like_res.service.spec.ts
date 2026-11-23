import { Test, TestingModule } from '@nestjs/testing';
import { LikeResService } from './like_res.service.js';
import { PrismaService } from '../../prisma/prisma.service.js';

describe('LikeResService', () => {
  let service: LikeResService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LikeResService,
        {
          provide: PrismaService,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<LikeResService>(LikeResService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
