import express from 'express';
import { environments } from './config';
import { connect } from 'mongoose';
import cors from 'cors';
import { router } from './routes/router';

const app = express();

const connectDatabase = async () => {
    try {
        await connect(environments.MONGO_URI!);
        console.log('Database connected');
    } catch (error) {
        console.log('Database connection failed');
    }
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World');
});
app.use(router);

app.listen(environments.PORT, async () => {
    await connectDatabase();
    console.log(`Server is running on port ${environments.PORT}`);
});