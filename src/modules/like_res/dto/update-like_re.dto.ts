import { PartialType } from '@nestjs/mapped-types';
import { CreateLikeReDto } from './create-like_re.dto.js';

export class UpdateLikeReDto extends PartialType(CreateLikeReDto) {}
