import mongoose from "mongoose";

const connectDB = async ()=>{
   try {
     const connect = await mongoose.connect(process.env.MONGO_URL)
     console.log(`mongo db connect ${connect.connection.host}`)
   } catch (error) {
    console.log(`mongo db connect error: ${error.message}`)
    process.exit(1)
   }
}

export default connectDB