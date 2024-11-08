import { Router } from "express";
import { createStock, getStockById, getStocksByProductId, updateStockQuantity } from "../controllers/stocks.controller";

const stocksRouter = Router();

stocksRouter.get("/:product_id", getStocksByProductId as any);
stocksRouter.post("/", createStock as any);
stocksRouter.put("/", updateStockQuantity as any);
stocksRouter.get("/stock/:stock_id", getStockById as any);

export default stocksRouter;