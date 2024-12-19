// create-subscription.dto.ts

import {
  IsString,
  IsOptional,
  IsNotEmpty,
  IsBoolean,
  IsNumber,
} from 'class-validator';

export class CreateSubscriptionDto {
  @IsString()
  @IsNotEmpty()
  customer: string;

  @IsString()
  @IsNotEmpty()
  planId: string;

  @IsNumber()
  @IsOptional()
  trialPeriodDays?: number;

  @IsBoolean()
  @IsOptional()
  autoRenewal?: boolean;

  @IsString()
  @IsOptional()
  couponCode?: string;

  @IsString()
  @IsOptional()
  billingCycleAnchor?: string;

  @IsString()
  @IsOptional()
  paymentMethodId?: string;
}
