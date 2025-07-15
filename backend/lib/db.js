import mongoose from "mongoose";
export const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connection to DB successfull at ${conn.connection.host}`);
    } catch(error) {
        console.log("Connection to DB failed", error.message);
        process.exit(1);
    }
};
