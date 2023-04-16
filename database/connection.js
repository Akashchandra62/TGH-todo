import mongoose from "mongoose";

export const connectDB = () => {

    mongoose.connect(process.env.MONGO_URL)
    .then((result) => {
        console.log("Connected to Database");
    }).catch((err) => {
        console.log("Error in connecting to database", err);
    });

}