export class FoodType {
  type_id: number;
  type_name: string | null;

  constructor(partial: Partial<FoodType>) {
    Object.assign(this, partial);
  }
}
