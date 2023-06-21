import { Model, Sequelize, DataTypes } from 'sequelize';
import { ProductAttributes } from '../attributes';

class Product extends Model implements ProductAttributes {
    public prodId!: string;
    public prodName!: string;
    public baseCost!: number;

    static initModel(sequelize: Sequelize): void {
        Product.init(
            {
                prodId: {
                    field: 'ProdID',
                    type: DataTypes.STRING,
                    primaryKey: true,
                },
                prodName: {
                    field: 'ProdName',
                    type: DataTypes.STRING,
                },
                baseCost: {
                    field: 'Base_Cost',
                    type: DataTypes.DOUBLE,
                },
            },
            {
                sequelize,
                underscored: true,
                tableName: 'Product',
                timestamps: false,
            }
        );
    }
}

export default Product;
