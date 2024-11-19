import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv"  
import userRouter from './routes/user.route.js'
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(()=>{
    console.log("mongodb connected")
  })
  .catch((err)=>{
    console.log(err);
  })



const PORT=3000;
const app=express();

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
})

app.use("/api/user",userRouter);

// here we are also going to create a proxy so we don't have to change the port again again in order to see the api response