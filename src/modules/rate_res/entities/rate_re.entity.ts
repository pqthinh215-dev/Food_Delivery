export class RateRe {
  id: number;
  user_id: number | null;
  res_id: number | null;
  amount: number | null;
  date_rate: Date | null;

  constructor(partial: Partial<RateRe>) {
    Object.assign(this, partial);
  }
}
