import mongoose from "mongoose";

/**
 * Connects to the MongoDB database using the MONGO_URL environment variable.
 *
 * @return {Promise<void>} - This function does not return anything.
 */
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