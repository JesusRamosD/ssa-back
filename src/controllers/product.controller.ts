import { Request, Response, NextFunction } from 'express';
import { IProduct } from '../models/Product';
import { ProductServices } from '../services/product.services';

export const createProduct = async (req: Request<{}, {}, IProduct, {}>, res: Response) => {
    try {
      const { name, description, image_slug } = req.body;
      const newProduct = await ProductServices.createProduct({ name, description, image_slug });
      return res.status(201).json(newProduct);
    } catch (error) {
      console.log(error);
      return res.status(400).send("Bad request");
    }
}

export const getAllProducts = async (req: Request<{}, {}, {}, {}>, res: Response) => {
    try {
        const products = await ProductServices.getProducts();
        return res.status(200).json(products);
    } catch (error) {
        console.log(error);
        return res.status(400).send("Bad request");
    }
}

export const getProductById = async (req: Request<{ id: string }, {}, {}, {}>, res: Response) => {
    try {
        const { id } = req.params;
        const product = await ProductServices.getProductById(id);
        return res.status(200).json(product);
    } catch (error) {
        console.log(error);
        return res.status(400).send("Bad request");
    }
}

