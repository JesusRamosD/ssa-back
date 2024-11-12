import { Router } from 'express';
import { createProduct, deleteProductById, getAllProducts, getProductById } from '../controllers/product.controller';

const productsRouter = Router();

productsRouter.get("/:id", 
    getProductById as any
);
productsRouter.delete("/:id",
    deleteProductById as any
);
productsRouter.get("", 
    getAllProducts as any
);
productsRouter.post("", 
    createProduct as any
);

export default productsRouter;