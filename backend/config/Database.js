/* eslint-disable no-console */
import mongoose from "mongoose";

export default () => {
  const uri = process.env.MONGO 

  mongoose.set("strictQuery", false);

  mongoose
    .connect(uri)
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => {
      console.log(`Database connection failed : ${err}`);
    });
    mongoose.connection.on("disconnected",()=>{
      console.log("mongoDb disconnected")
    })
    mongoose.connection.on("connected",()=>{
      console.log("mongodb connected")  
    })
}; 