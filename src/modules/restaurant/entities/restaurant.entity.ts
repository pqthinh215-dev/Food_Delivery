export class Restaurant {
  res_id: number;
  res_name: string | null;
  image: string | null;
  description: string | null;

  constructor(partial: Partial<Restaurant>) {
    Object.assign(this, partial);
  }
}
