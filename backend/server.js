import connectDB from './config/db.js';
import dotenv from 'dotenv';
import express from 'express';
import productRoutes from './routes/productRoutes.js'

dotenv.config();

const app = express();
connectDB();
const PORT = process.env.PORT || 8000;
app.get('/', (req,res)=>{
 res.send("api is running!");
})

app.use('/api/products',productRoutes)

app.listen(PORT, ()=> console.log(`api ins running ${PORT}`))