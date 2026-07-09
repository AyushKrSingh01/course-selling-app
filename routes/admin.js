const {Router} = require('express');
const adminRouter = Router();
const {adminModel} = require('../db');
adminRouter.post('/signup',(req,res)=>{
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