export class LikeRe {
  id: number;
  user_id: number | null;
  res_id: number | null;
  date_like: Date | null;

  constructor(partial: Partial<LikeRe>) {
    Object.assign(this, partial);
  }
}
