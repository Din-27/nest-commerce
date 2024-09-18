import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { CustomersModule } from './app/customers/customers.module';
import { ProductsModule } from './app/products/products.module';
// import { UsersModule } from './app/users/users.module';
// import { OrdersModule } from './app/orders/orders.module';

@Module({
  imports: [
    // CustomersModule,
    ProductsModule,
    // UsersModule,
    // OrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
