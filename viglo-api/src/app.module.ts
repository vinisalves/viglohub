import { TypeOrmModule } from '@nestjs/typeorm';

import { dataSourceOptions } from '../datasource';
import { AuthModule } from './apps/auth/auth.module';
import { FileModule } from './apps/files/file.module';
import { NotificationsModule } from './apps/notifications/notifications.module';
import { PartnersModule } from './apps/partners/partners.module';
import { TransactionsModule } from './apps/transactions/transactions.module';
import { UsersModule } from './apps/users/users.module';
import { Module } from '@nestjs/common';
import { ProductsModule } from './apps/products/products.module';
import {
  AcceptLanguageResolver,
  CookieResolver,
  HeaderResolver,
  I18nModule,
  QueryResolver,
} from 'nestjs-i18n';
import { CustomI18nModule } from './apps/i18n/i18n.module';
import { PaymentGatewayModule } from './apps/payment-gateway/payment-gateway.module';
import { SubscribersModule } from './apps/subscribers/subscribers.module';
import { FollowersModule } from './apps/followers/followers.module';
import { ReviewsModule } from './apps/reviews/reviews.module';
import { PlansModule } from './apps/plans/plans.module';
import { TagsModule } from './apps/tags/tags.module';
import { TeamsModule } from './apps/teams/teams.module';
import { RolesModule } from './apps/roles/roles.module';
import * as path from 'path';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './guards/auth-jwt.guard';
@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: path.join(__dirname, '../locales/'),
        watch: true,
      },
      resolvers: [
        { use: QueryResolver, options: ['lang', 'locale', 'l'] },

        new HeaderResolver(['x-custom-lang']),

        AcceptLanguageResolver,

        new CookieResolver(['lang', 'locale', 'l']),
      ],
    }),
    AuthModule,
    UsersModule,
    PartnersModule,
    AuthModule,
    TransactionsModule,
    NotificationsModule,
    FileModule,
    ProductsModule,
    CustomI18nModule,
    PaymentGatewayModule,
    SubscribersModule,
    FollowersModule,
    ReviewsModule,
    PlansModule,
    TagsModule,
    TeamsModule,
    RolesModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
