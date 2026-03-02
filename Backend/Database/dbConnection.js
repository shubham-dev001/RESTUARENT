import mongoose from "mongoose";

 export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "RESTAURENT",
    })
    .then(() => {
        console.log("connected to database is successful!");
    }).catch((err) => {
        console.log("error", err);
    });
}
