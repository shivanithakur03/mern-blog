const express=require('express');
const dbConnect=require('./Configration');
const app=express();
app.get('/',async (req,res)=>{
    //res.send({"Name":"shivani"})
    let data=await dbConnect();
    data=await data.find().toArray();
    res.send(data)
})
.listen(7800);