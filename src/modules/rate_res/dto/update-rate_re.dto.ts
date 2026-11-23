import { PartialType } from '@nestjs/mapped-types';
import { CreateRateReDto } from './create-rate_re.dto.js';

export class UpdateRateReDto extends PartialType(CreateRateReDto) {}
