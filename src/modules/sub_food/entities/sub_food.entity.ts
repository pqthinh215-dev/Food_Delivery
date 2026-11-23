export class SubFood {
  sub_id: number;
  sub_name: string | null;
  sub_price: number | null;
  food_id: number | null;

  constructor(partial: Partial<SubFood>) {
    Object.assign(this, partial);
  }
}
