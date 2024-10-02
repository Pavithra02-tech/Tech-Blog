import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyparse from 'body-parser';
import bodyParser from 'body-parser';

const app = express();
const port=8080;

//middleware
app.use(cors({
    origin: '*', // Allow requests from any origin
}));

app.use(bodyParser.json());

//endpoint
app.get('/api',(req,res)=>{
    res.send('Request received successfullyy..!!!')
})

app.post('/create',(req,res)=>{
    let reqdata=req.body;
    console.log(reqdata);
    res.send('Received data..!!!');
})

//listener
app.listen(port,()=> {
    console.log(`Server is running on the port ${port}`);
})

