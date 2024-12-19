import { CreateCustomerDto } from '../dtos/create-customer.dto';
import { CreateSubscriptionDto } from '../dtos/create-subscription.dto';
import { UpdateCustomerDto } from '../dtos/update-customer.dto';

export interface PaymentGatewayInterface {
  createCustomer(createCustomerDto: CreateCustomerDto): Promise<any>;
  updateCustomer(
    paymentGatewayUserId: string,
    updateCustomerDto: UpdateCustomerDto,
  ): Promise<any>;
  createSubscription(
    createSubscriptionDto: CreateSubscriptionDto,
  ): Promise<unknown>;
}
