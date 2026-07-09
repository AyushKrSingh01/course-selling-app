const {Router} = require('express');
const adminRouter = Router();
const {adminModel} = require('../db');
const bcrypt = require('bcrypt')
const zod = require('zod');
const jwt = require('jsonwebtoken');
const JWT_ADMIN_PASSWORD="adminddd";

adminRouter.post('/signup',async (req,res)=>{
    const {email,password,firstName,lastName} = req.body;
    const hashedPassword= await bcrypt.hash(password,5);
    try{
        await adminModel.create({
        email:email,
        password:hashedPassword,
        firstName:firstName,
        lastName:lastName
        })
        
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
adminRouter.post('/signin',async (req,res)=>{
    try{
        const {email,password} = req.body;
        const user = await adminModel.findOne({
            email
        })
        if(!user){
            res.status(403).json({
                message:"User not found"
            })
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            res.status(401).json({
                message:"Invalid Password"
            })
        }

        const token = jwt.sign({id:user._id},JWT_ADMIN_PASSWORD);
        res.json({
            token:token,
            message:"Logged In"
        })

    }
    catch(e){
        res.status(401).json({
        message:"error found"
     })
    }
})
adminRouter.post('/course',(req,res)=>{
    res.json({
        message:"login endpoint"
    })
})

adminRouter.put('/course',(req,res)=>{
    res.json({
        message:"login endpoint"
    })
})

adminRouter.get('/course/bulk',(req,res)=>{
    res.json({
        message:"login endpoint"
    })
})

module.exports={
    adminRouter : adminRouter
}