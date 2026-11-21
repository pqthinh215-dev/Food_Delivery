import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user/user.module.js';
import { FoodModule } from './modules/food/food.module.js';
import { RestaurantModule } from './modules/restaurant/restaurant.module.js';
import { FoodTypeModule } from './modules/food_type/food_type.module.js';
import { RateResModule } from './modules/rate_res/rate_res.module.js';
import { SubFoodModule } from './modules/sub_food/sub_food.module.js';
import { OrderFoodModule } from './modules/order_food/order_food.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com,
    // then run `npx @nestjs/observe link` to write your key pair into .env.
    ObserveModule.forRoot({
      appKey: process.env.OBSERVE_APP_KEY ?? 'YOUR_APP_KEY',
      appSecret: process.env.OBSERVE_APP_SECRET ?? 'YOUR_APP_SECRET',
      serviceId: 'project-nestjs',
    }),
    ConfigModule.forRoot(),
    UserModule,
    FoodModule,
    RestaurantModule,
    FoodTypeModule,
    RateResModule,
    SubFoodModule,
    OrderFoodModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
