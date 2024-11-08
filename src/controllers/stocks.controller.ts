import { IStock } from "../models/Stock";
import { Request, Response } from "express";
import { StockServices } from "../services/stock.services";


export const createStock = async (req: Request<{}, {}, IStock, {}>, res: Response) => {
    try {
        const { description, quantity, product_id } = req.body;
        const newStock = await StockServices.createStock({ description, quantity, product_id });
        return res.status(201).json(newStock);
    } catch (error) {
        console.log(error);
        return res.status(400).send("Bad request");
    }
}

export const getStocksByProductId = async (req: Request<{ product_id: string }, {}, {}, {}>, res: Response) => {
    try {
        const { product_id } = req.params;
        const stocks = await StockServices.getStocksByProductId(product_id);
        return res.status(200).json(stocks);
    } catch (error) {
        console.log(error);
        return res.status(400).send("Bad request");
    }
}

export const getStockById = async (req: Request<{ stock_id: string }, {}, {}, {}>, res: Response) => {
    try {
        const { stock_id } = req.params;
        const stock = await StockServices.getStockById(stock_id);
        return res.status(200).json(stock);
    } catch (error) {
        console.log(error);
        return res.status(400).send("Bad request");
    }
}

export const updateStockQuantity = async (req: Request<{}, {}, { quantity: number, stock_id: string }, {}>, res: Response) => {
    try {
        const { quantity, stock_id } = req.body;
        const stock = await StockServices.updateStockQuantity(stock_id, quantity);
        return res.status(200).json(stock);
    } catch (error) {
        console.log(error);
        return res.status(400).send("Bad request");
    }
}