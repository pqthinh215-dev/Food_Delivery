import { Exclude } from 'class-transformer';

export class User {
  user_id: number;
  fullname: string | null;
  email: string | null;

  @Exclude() 
  password: string | null;

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}