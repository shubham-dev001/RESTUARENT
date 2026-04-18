import mongoose from "mongoose";

 export const dbConnection = async() => {
     try {
          await  mongoose.connect(process.env.MONGO_URI)
     console.log("connected to database is successful!");
   
     } catch (error) {
        console.log(error, "mongodb error");
        process.exit(1);
     } 
}
