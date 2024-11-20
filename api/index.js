import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv"  
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
dotenv.config();

const app=express();
mongoose
  .connect(process.env.MONGO)
  .then(()=>{
    console.log("mongodb connected")
  })
  .catch((err)=>{
    console.log(err);
  })



const PORT=3002;

app.use(express.json());

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
})

app.use("/api/user",userRouter);
app.use("/api/auth", authRouter)

// MIDDLEWARES --> to handle the errors
app.use((err,req,res,next)=>{
    const statusCode=err.statusCode || 500;
    const message = err.message || 'hello'
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
       
    })
})

// here we are also going to create a proxy so we don't have to change the port again again in order to see the api response