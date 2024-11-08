import { Router } from "express";
import productsRouter from "./products.routes";
import stocksRouter from "./stock.routes";


const router = Router();

router.use("/products", productsRouter)
router.use("/stocks", stocksRouter)

export {router};