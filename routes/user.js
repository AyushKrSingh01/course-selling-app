const {Router} = require('express');
const bcrypt = require('bcrypt');
const {userModel, purchaseModel} = require('../db');
const userRouter = Router();
const jwt = require('jsonwebtoken');
const {JWT_USER_PASSWORD} = require('../config');
const { userMiddleware } = require('../middleware/user');

userRouter.post('/signup',async (req,res)=>{
    try{
        const {email,password,firstName,lastName} = req.body;
        const hashedPassword = await bcrypt.hash(password,5);
        console.log(hashedPassword);
        
        const user = await userModel.create({
            email,
            password:hashedPassword,
            firstName,
            lastName
        })
        console.log(user);
        
        res.json({
        message:"signup endpoint"
    })
    }
    catch(e){
        res.status(403).json({
        message:"error occured"
        })
    }
     
})
userRouter.post('/signin',async (req,res)=>{
    try{
        const {email,password} = req.body;
        const user = await userModel.findOne({
            email
        })

        if(!user){
           return res.status(404).json({
                message: "User not found"
            });
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(401).json({
                message:"Incorrect Password"
            });
        }
        const token = jwt.sign({id:user._id},JWT_USER_PASSWORD);
        //Do cookie logic
        res.json({
            token:token,
            message:"Login success"
        })
    }
    catch(e){
        res.json({
            message:"error found"
        })
    }
})

userRouter.get('/purchases',userMiddleware,async (req,res)=>{
        const userId = req.userId;
        const purchases = await purchaseModel.find({
            userId,
        });
        res.json({
            purchases
    })
})

module.exports={
    userRouter:userRouter
}