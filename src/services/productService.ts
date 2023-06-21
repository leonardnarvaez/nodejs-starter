import { db } from '../database/models';
import Product from '../database/models/product';

class ProductService {
    private static instance: ProductService;

    static getInstance(): ProductService {
        if (!ProductService.instance) {
            ProductService.instance = new ProductService();
        }
        return ProductService.instance;
    }

    findAll = async () => {
        const products: Product[] = await Product.findAll({
            attributes: ['prodId', 'prodName', 'baseCost'],
        });
        return products;
    };

    findById = async (prodId: string) => {
        const existingProduct: Product | null = await Product.findByPk(prodId, {
            attributes: ['prodId', 'prodName', 'baseCost'],
        });
        return existingProduct;
    };

    save = async (object: any) => {
        try {
            if (!object && Object.keys(object.length == 0)) {
                throw new Error('Object must contain at least one property');
            }
            const employee = await Product.create({ ...object });
            return employee;
        } catch (err) {
            throw err;
        }
    };

    update = async (prodId: string, object: any) => {
        if (!object && Object.keys(object).length == 0) {
            throw new Error(
                'Object to be updated must contain at least one property.'
            );
        }

        let existingProduct = await this.findById(prodId);
        if (!existingProduct) {
            throw new Error('product_not_found');
        }

        try {
            await Product.update(
                { ...object },
                {
                    where: { prodId }, //shorthand
                }
            );

            existingProduct = await this.findById(prodId);
            return existingProduct;
        } catch (err) {
            throw err;
        }
    };

    deleteByPrimaryKey = async (prodId: string) => {
        let existingProduct = await this.findById(prodId);
        if (!existingProduct) {
            throw new Error('product_not_found');
        }

        try {
            await existingProduct.destroy();
        } catch (err) {
            throw err;
        }
    };
}

export default ProductService;
