import { Schema, model } from 'mongoose';

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image_slug: {
        type: String,
        required: false
    }
});

interface IProduct {
    name: string;
    description: string;
    image_slug?: string;
}

export {
    IProduct
}

export default model('Product', ProductSchema);