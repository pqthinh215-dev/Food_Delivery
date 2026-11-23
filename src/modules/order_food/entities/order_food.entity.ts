export class OrderFood {
  id: number;
  user_id: number | null;
  food_id: number | null;
  amount: number | null;
  code: string | null;
  arr_sub_id: string | null;

  constructor(partial: Partial<OrderFood>) {
    Object.assign(this, partial);
  }
}
