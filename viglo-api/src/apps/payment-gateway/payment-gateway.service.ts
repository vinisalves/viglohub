import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dtos/create-customer.dto';
import { PaymentGatewayFactory } from './payment-gateway.factory';
import { PaymentGatewayInterface } from './intefaces/payment-gateway.interface';
import { UpdateCustomerDto } from './dtos/update-customer.dto';
import { CreateSubscriptionDto } from './dtos/create-subscription.dto';

@Injectable()
export class PaymentGatewayService implements PaymentGatewayInterface {
  constructor(private readonly paymentGatewayFactory: PaymentGatewayFactory) {}

  async updateCustomer(paymentGatewayUserId: string, updateCustomerDto: UpdateCustomerDto): Promise<any> {
    const paymentGateway: PaymentGatewayInterface = this.paymentGatewayFactory.getPaymentGateway();
    return await paymentGateway.updateCustomer(paymentGatewayUserId, updateCustomerDto);
  }
  async createSubscription(createSubscriptionDto: CreateSubscriptionDto) {
    const paymentGateway: PaymentGatewayInterface = this.paymentGatewayFactory.getPaymentGateway();
    return await paymentGateway.createSubscription(createSubscriptionDto);
  }

  async createCustomer(createCustomerDto: CreateCustomerDto) {
    const paymentGateway: PaymentGatewayInterface = this.paymentGatewayFactory.getPaymentGateway();
    return await paymentGateway.createCustomer(createCustomerDto);
  }
}
