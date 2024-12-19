import { Global, Module } from '@nestjs/common';
import { PaymentGatewayService } from './payment-gateway.service';
import { PaymentGatewayFactory } from './payment-gateway.factory';
import { StripePaymentGateway } from './implementations/stripe-payment.gateway';
@Global()
@Module({
  providers: [
    PaymentGatewayService,
    PaymentGatewayFactory,
    StripePaymentGateway,
  ],
  exports: [PaymentGatewayService],
})
export class PaymentGatewayModule {}
