import express from 'express';
const app = express();
import Routes from './routes/index';
import {connectDB} from './db/connection';

app.use(express.json());

const PORT = 5000;
connectDB();
app.use('/', Routes)

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});