import Stock, { IStock } from "../models/Stock"


export const StockServices = {
    async getStocksByProductId(id: string) {
       try {
        const stocks = Stock.find({
            product_id: id
        });
        return stocks;
       } catch (error) {
              throw new Error(error);
       }
    },
    async getStockById(id: string) {
        try {
            const stock = Stock.findById(id);
            return stock;
        } catch (error) {
            throw new Error(error);
        }
    },
    async createStock(stock: IStock) {
        try {         
            const newStock = Stock.create(stock);
            return newStock;
        } catch (error) {
            throw new Error(error);
        }
    },
    async updateStockQuantity(id: string, quantity: number) {
        try {
            const stock = Stock.findByIdAndUpdate({
                _id: id
            }, {
                quantity: quantity
            })
            return stock;
        } catch (error) {
            throw new Error(error);
        }
    },
    async deleteStocksByProductId(id: string) {
        try {
            const stocks = Stock.deleteMany({
                product_id: id
            });
            return stocks;
        } catch (error) {
            throw new Error(error);
        }
    }
}