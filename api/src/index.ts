import express from 'express';
const app = express();
import Routes from './routes/index';
import {connectDB} from './db/connection';
//import cors from 'cors';


app.use(express.json());
//app.use(cors());

app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');//*
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

const PORT = 5000;
connectDB();
app.use('/', Routes)

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});