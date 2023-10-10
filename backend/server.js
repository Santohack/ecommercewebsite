import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import products from './data/Products.js';
const app = express();

const PORT = process.env.PORT || 8000;
app.get('/', (req,res)=>{
 res.send("api is reunning!");
})

app.get('/api/products', (req,res)=>{
    res.json(products)
})
app.get('/api/products/:id', (req,res)=>{
    const product = products.find((p)=> p._id === req.params.id)
    res.json(product)
})
app.listen(PORT, ()=> console.log(`api ins running ${PORT}`))