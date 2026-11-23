import { Global, Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user/user.module.js';
import { FoodModule } from './modules/food/food.module.js';
import { RestaurantModule } from './modules/restaurant/restaurant.module.js';
import { FoodTypeModule } from './modules/food_type/food_type.module.js';
import { RateResModule } from './modules/rate_res/rate_res.module.js';
import { SubFoodModule } from './modules/sub_food/sub_food.module.js';
import { OrderFoodModule } from './modules/order_food/order_food.module.js';
import { CatchEverythingFilter } from './common/filters/http-exception.filter.js';
import { APP_FILTER } from '@nestjs/core';
import { PrismaModule } from './prisma/prisma.module.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    ObserveModule.forRoot({
      appKey: process.env.OBSERVE_APP_KEY ?? 'YOUR_APP_KEY',
      appSecret: process.env.OBSERVE_APP_SECRET ?? 'YOUR_APP_SECRET',
      serviceId: 'project-nestjs',
    }),
    ConfigModule.forRoot({isGlobal: true}),
    PrismaModule,
    UserModule,
    FoodModule,
    RestaurantModule,
    FoodTypeModule,
    RateResModule,
    SubFoodModule,
    OrderFoodModule,
  ],
  controllers: [],
  providers: [ 
    {
      provide: APP_FILTER,
      useClass: CatchEverythingFilter,
    },
   ],
})
export class AppModule {}
