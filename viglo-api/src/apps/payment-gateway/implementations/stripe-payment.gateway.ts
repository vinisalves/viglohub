import { Injectable } from '@nestjs/common';

import Stripe from 'stripe';
import { PaymentGatewayInterface } from '../intefaces/payment-gateway.interface';
import { CreateCustomerDto } from '../dtos/create-customer.dto';
import { UpdateCustomerDto } from '../dtos/update-customer.dto';
import { CreateSubscriptionDto } from '../dtos/create-subscription.dto';

@Injectable()
export class StripePaymentGateway implements PaymentGatewayInterface {
  private stripe: Stripe;

  constructor() {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: '2024-10-28.acacia',
    });
  }

  async createCustomer(createCustomerDto: CreateCustomerDto): Promise<unknown> {
    return await this.stripe.customers.create({
      name: createCustomerDto.name,
      email: createCustomerDto.email,
      phone: createCustomerDto.phone,
      address: createCustomerDto.address,
      payment_method: createCustomerDto.payment_method,
      invoice_settings: createCustomerDto.invoice_settings,
      metadata: createCustomerDto.metadata,
      description: createCustomerDto.description,
      tax_exempt: createCustomerDto.tax_exempt,
      coupon: createCustomerDto.coupon,
    });
  }

  async updateCustomer(
    stripUserId: string,
    updateCustomerDto: UpdateCustomerDto,
  ): Promise<unknown> {
    return await this.stripe.customers.update(stripUserId, updateCustomerDto);
  }

  async createSubscription(
    createSubscriptionDto: CreateSubscriptionDto,
  ): Promise<unknown> {
    return await this.stripe.subscriptions.create(createSubscriptionDto);
  }
  async chargeCustomer(customerId: string, amount: number): Promise<any> {
    // Here, you would implement the charging logic with Stripe
    return await this.stripe.paymentIntents.create({
      customer: customerId,
      amount: amount * 100, // convert to cents
      currency: 'usd',
      payment_method_types: ['card'],
    });
  }
}
