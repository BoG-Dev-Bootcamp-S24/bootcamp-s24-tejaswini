import mongoose from "mongoose";

export default async function connectDB() {
    if (mongoose.connection[0]?.readyState) {
        return;
    }
    await mongoose.connect(process.env.DB_URL,  {dbName : process.env.DB_NAME}).catch((e) => {
        console.log("Error connecting to MongoDB", e);
        throw e;
    });

}