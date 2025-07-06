import mongoose from "mongoose";

const ConnectDB = async () => {
    try {
        mongoose.connection.on("connected", () => {
            console.log("MongoDB connected successfully.");
        });
        await mongoose.connect(`${process.env.MONGODB_URI}/groceryy`)
    } catch (error) {
        console.log(error.nessage);
        
    }
}

export default ConnectDB;