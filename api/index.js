import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv"  
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
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
app.use(express.json());

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
})

app.use("/api/user",userRouter);
app.use("/api/auth", authRouter)

// MIDDLEWARES --> to handle the errors
app.use((err,req,res,next)=>{
    const statusCode=err.statusCode || 500;
    const message = err.message || 'internal server error'
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode
    })
})

// here we are also going to create a proxy so we don't have to change the port again again in order to see the api response