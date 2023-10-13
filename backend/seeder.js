import Order from './models/orderModel/index.js';
import Product from './models/productModel/index.js';
import User from './models/userModel/index.js';
import colors from 'colors'
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import mongoose from "mongoose";
import products from './data/Products.js';
import users from './data/user.js';

dotenv.config();
connectDB();
const importData = async ()=>{
   try {
    await User.deleteMany();
    await Order.deleteMany();
    await Product.deleteMany();
    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product)=>{
        return {...product, user: adminUser}
    })
    await Product.insertMany(sampleProducts);
    console.log("data imported".green.inverse);
    process.exit()

   } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1)
    
   }
}

const destroyData = async ()=>{
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
        console.log("data destroyed".red.inverse);
        process.exit()
}
    catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1)
    }
}

if(process.argv[2] === '-d'){
    destroyData()
}
else{
    importData()
}