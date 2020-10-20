const express=require('express');
const mongoose=require('mongoose');

const url='mongodb://localhost/CompanyDBex';
const app=express();

mongoose.connect(url,{useNewUrlParser:true});
const con=mongoose.connection;
con.on('open',function(){
    console.log("connected...");
});
app.use(express.json());
const CompanyRouter=require('./routers/companies');
app.use('/companies',CompanyRouter);
app.listen(9000,function(){
    console.log("Server has started!!!");
})