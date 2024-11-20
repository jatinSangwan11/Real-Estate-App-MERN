import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js';
export const signup = async(req, res, next)=>{
//    console.log(req.body); to check the data coming from the body 
  const {username,email,password} = req.body;
  const hashedPassword= bcryptjs.hashSync(password,10);
  const newUser = new User({username, email,password: hashedPassword});
  
  // if the someone sends the same username or email so to throw the error we use try and catch
  
  // THIS SHOULD BE HANDLED USING MIDDLEWARE in index.js file
  try{
    await newUser.save();

    res.status(201).json({
    message: "new user created"
  })
  }catch(err){
     next(err)
  }
  
 
}



// we want to save the data from the body to database
// we will destructure the data recieved from the body and then use the user modal to save the data in the form of the userModal created
//   201 --- something is created
//   500 -- internal server error means here duplicacy