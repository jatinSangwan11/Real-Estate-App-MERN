import express from 'express'
import { signup ,signin} from '../controllers/auth.controller.js';

const router= express.Router();

router.post("/signup",signup)
router.post('/signin',signin)



export default router;
// here we want to get request from the browser body and then post it to the database look at the controller for the logic