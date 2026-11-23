export class Food {
  food_id: number;
  food_name: string | null;
  image: string | null;
  price: number | null;
  description: string | null;
  type_id: number | null;

  constructor(partial: Partial<Food>) {
    Object.assign(this, partial);
  }
}
