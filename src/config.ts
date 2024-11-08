import { config } from 'dotenv';

config();

const environments = {
    PORT: Number(process.env.PORT),
    MONGO_URI: process.env.MONGO_URI
}

export {
    environments
}