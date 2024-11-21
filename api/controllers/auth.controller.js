import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';
export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json({
      message: "user created!!"
    });
  } catch (error) {
    next(error);
  }
};
 


// we want to save the data from the body to database
// we will destructure the data recieved from the body and then use the user modal to save the data in the form of the userModal created
//   201 --- something is created
//   500 -- internal server error means here duplicacy

export const signin= async (req, res, next) =>{
    const {email, password}= req.body
    try{
      //  const validUser= await User.findOne({email: email})  -- this checks for the email is present or not since key and value have same name we can just write email
      const validUser = await User.findOne({email});
      if(!validUser)return next(errorHandler(404, 'User not found'))
      const validPassword= bcryptjs.compareSync(password, validUser.password)
      if(!validPassword)return next(errorHandler(401, 'Wrong Credential!'))
      const token= jwt.sign({ id: validUser._id}, process.env.JWT_SECRET)
     const {password: oass, ...rest} = validUser._doc
      // now we want to save this token as a cookie with it's life as 24hrs from miliseconds format
      res
      .cookie('access_token', token, { httpOnly:true, expires: new Date(Date.now()+ 24*60*60)})
      .status(200)
      .json(rest)

    } catch (error){
      next(error)
    }
}

// here we don't want the password back in response , we don't want to send password (hashed) back to the user