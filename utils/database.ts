import mongoose from "mongoose";

let isConnected = false;

export const connectDb = async () => {
    mongoose.set("strictQuery" , true);
    if(isConnected){
        console.log("Already Connected to the DB");
        return;
    }

    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`);
        isConnected = true;
        console.log("Connected to DB");
    } catch (err : any) {
        console.log("Error in Connected to the DB");
    }
}