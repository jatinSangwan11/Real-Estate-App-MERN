import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    }
},{timestamps: true});

// here the timestamps true means to record the time of creation of the user and time of updation so that we can sort them

const User= mongoose.model("User", userSchema);

export default User;