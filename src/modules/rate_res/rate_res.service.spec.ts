import { Test, TestingModule } from '@nestjs/testing';
import { RateResService } from './rate_res.service.js';
import { PrismaService } from '../../prisma/prisma.service.js';

describe('RateResService', () => {
  let service: RateResService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RateResService,
        {
          provide: PrismaService,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<RateResService>(RateResService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
