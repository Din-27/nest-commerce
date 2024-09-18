import { Product } from '../entities/product.entity';

export const productRepository = [
  {
    provide: 'PRODUCT_REPOSITORY',
    useValue: Product,
  },
];
