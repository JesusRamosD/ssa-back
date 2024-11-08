import Product, { IProduct } from "../models/Product";
import { StockServices } from "./stock.services";

export const ProductServices = {
    async getProducts() {
        try {
            const products = await Product.find();
            const stockQuantityByProduct = await Promise.all(products.map(async (product) => {
                const stock = await StockServices.getStocksByProductId(product._id as unknown as string);
                const quantity = stock.reduce((acc, curr) => acc + curr.quantity, 0);
                return { ...product.toJSON(), stockQuantity: quantity };
            }));
            return stockQuantityByProduct;
        } catch (error) {
            throw new Error(error);
        }
    },
    async getProductById(id: string) {
        try {
            const product = await Product.findById(id);
            return product;
        } catch (error) {
            throw new Error(error);
        }
    },
    async createProduct(product: IProduct) {
        try {
            const newProduct = await Product.create(product);
            return newProduct;
        } catch (error) {
            throw new Error(error);
        }
    },
}