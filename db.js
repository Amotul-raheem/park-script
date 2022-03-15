import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()


const mongodbConnection = ( async () => {
    await mongoose.connect(process.env.MONGODB_URL);

})
export {mongodbConnection};
