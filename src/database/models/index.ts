import SequelizeConnection from '../configuration';
import Employee from './employee';
import Product from './product';
import QueryHandling from './queryHandling';

const sequelize = SequelizeConnection.getInstance();

//Initialize Models
Employee.initModel(sequelize);
Product.initModel(sequelize);
QueryHandling.initModel(sequelize);

export const db = {
    sequelize,
    Employee,
    Product,
    QueryHandling,
};
