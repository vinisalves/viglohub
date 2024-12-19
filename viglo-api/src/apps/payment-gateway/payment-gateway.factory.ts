import { Injectable } from '@nestjs/common';
import { StripePaymentGateway } from './implementations/stripe-payment.gateway';
import { PaymentGatewayInterface } from './intefaces/payment-gateway.interface';

@Injectable()
export class PaymentGatewayFactory {
  constructor(private readonly stripePaymentGateway: StripePaymentGateway) {}

  getPaymentGateway(): PaymentGatewayInterface {
    return this.stripePaymentGateway;
  }
}
