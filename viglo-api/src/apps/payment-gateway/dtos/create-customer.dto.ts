import { CustomerAddressInterface } from '../intefaces/customer-adress.inteface';
import { InvoiceSettingsInterface } from '../intefaces/customer-invoice-settings.interface';
import { CustomerMetadataInterface } from '../intefaces/customer-metadata.interface';

export class CreateCustomerDto {
  email: string;
  name: string;
  phone?: string;
  address?: CustomerAddressInterface;
  payment_method?: string;
  invoice_settings?: InvoiceSettingsInterface;
  metadata?: CustomerMetadataInterface;
  description?: string;
  preferred_locales?: string[];
  tax_exempt?: 'none' | 'exempt' | 'reverse';
  coupon?: string;
}
