import connectDB from './config/db.js';
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';
import express from 'express';
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'

dotenv.config();

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
connectDB();
const PORT = process.env.PORT || 8000;
app.get('/', (req,res)=>{
 res.send("api is running!");
})
app.use(cookieParser())
app.use('/api/products',productRoutes)
app.use('/api/users',userRoutes)
app.use('/api/orders',orderRoutes)

app.listen(PORT, ()=> console.log(`api ins running ${PORT}`))