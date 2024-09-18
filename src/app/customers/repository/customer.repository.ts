import { Customer } from '../entities/customer.entity';

export const customerRepository = [
  {
    provide: 'CUSTOMER_REPOSITORY',
    useValue: Customer,
  },
];
