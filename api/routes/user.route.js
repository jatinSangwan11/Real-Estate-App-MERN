import express from 'express'
import test from '../controllers/user.controller.js';

const router =express.Router();

//  THIS IS NOT THE BEST PRACTICE we need the api route logic to coontroller file
// router.get('/test',(req,res)=>{
//     res.json({
//         message: "hello world"
//     })
// })

router.get('/test',test)

export default router;

