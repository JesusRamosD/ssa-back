import { model, Schema} from 'mongoose';

const StockSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    product_id: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    }
});

export interface IStock {
    description: string;
    quantity: number;
    product_id: string;
}

export default model('Stock', StockSchema);