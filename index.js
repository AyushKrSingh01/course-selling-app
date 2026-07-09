const express = require('express')
const jwt = require('jsonwebtoken')
const app = express();

function auth(req,res,next){
    
}
app.post('/user/signup',(req,res)=>{
    res.json({
        message:"signup endpoint"
    })
})
app.post('/user/login',(req,res)=>{
    res.json({
        message:"login endpoint"
    })
})

app.get('/user/purchases',(req,res)=>{
        res.json({
        message:"login endpoint"
    })
}) 
app.post('/course/purchase',(req,res)=>{
        res.json({
        message:"purchase endpoint"
    })
})   
app.get('/courses',(req,res)=>{
    res.json({
        message:"cources endpoint"
    })
})
app.post('/admin-signup',(req,res)=>{

})
app.post('/admin-login',(req,res)=>{

})
app.post('/create-course',(req,res)=>{

})
app.post('/delete-course',(req,res)=>{

})
app.post('/add-course-content',(req,res)=>{

})




app.listen(3000);