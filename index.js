const express = require('express')
const {userRouter} = require('./routes/user');
const {courseRouter} = require('./routes/course');
const {adminRouter} = require('./routes/admin');
const mongoose = require("mongoose");
require('dotenv').config();
const app = express();

app.use('/user',userRouter);
app.use('/course',courseRouter);
app.use('/admin',adminRouter);
app.use(express.json());

async function main(){
 await mongoose.connect(process.env.MONGODB_URI);
 app.listen(3000);
    console.log("listing on port 3000");
}

main();
