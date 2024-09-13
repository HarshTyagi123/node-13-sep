const express = require('express');
const app =express();
const userRouter=require('./routes/user.js');
app.use(userRouter);




app.listen(3000,(err)=>{
    if(err) {
        console.log(err)
    }else {
        console.log("server is running on 3000");
    }
})