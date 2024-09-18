import { Sequelize } from 'sequelize-typescript';
import { Product } from 'src/app/products/entities/product.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'tear',
      });
      sequelize.addModels([Product]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
