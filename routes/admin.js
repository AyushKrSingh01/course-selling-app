const {Router} = require('express');
const adminRouter = Router();
const {adminModel} = require('../db');
const bcrypt = require('bcrypt')
const zod = require('zod');
const JWT = require('jsonwebtoken');
adminRouter.post('/signup',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const hashedPassword= bcrypt.hash(password);
    
    res.json({
        message:"signup endpoint"
    }) 
})
adminRouter.post('/signin',(req,res)=>{
    res.json({
        message:"login endpoint"
    })
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