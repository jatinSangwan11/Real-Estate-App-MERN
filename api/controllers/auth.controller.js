import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js';
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