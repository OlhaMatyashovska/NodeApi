const express=require('express');
const router=express.Router();
const Company=require('../models/company');
router.get('/',async(req,res)=>{
 try{
     const companies = await Company.find();
     res.json(companies);
 }catch(err)
 {
res.send("Error:" + err);
 }
});

router.get('/:id',async(req,res)=>{
    try{
        const companies = await Company.findById(req.params.id);
        res.json(companies);
    }catch(err)
    {
   res.send("Error:" + err);
    }
   });
   /*router.get('/about',async(req,res)=>{
    try{
        const companies = await Company.find(req.params.workercount>1000);
        res.json(companies);
    }catch(err)
    {
   res.send("Error:" + err);
    }
   });*/
   router.post('/add',async(req,res)=>{
    const newCompany=new Company({
        company:req.body.company,
        technologies:req.body.technologies,
        countriesAllies:req.body.countriesAllies,
        workercount:req.body.workercount
    },{
        company:req.body.company,
        technologies:req.body.technologies,
        countriesAllies:req.body.countriesAllies,
        workercount:req.body.workercount
    });

    try{
    const a1=await newCompany.save();
    res.json(a1);
    }
    catch(err){
        res.send("Error:"+ err);
    }
    });
router.post('/',async(req,res)=>{
const newCompany=new Company({
    company:req.body.company,
    technologies:req.body.technologies,
    countriesAllies:req.body.countriesAllies,
    workercount:req.body.workercount
});
try{
const a1=await newCompany.save();
res.json(a1);
}
catch(err){
    res.send("Error:"+ err);
}
});
router.patch('/:id',async(req,res)=>{
    
    try{
    const a2=await Company.findById(req.params.id);
        a2.company=req.body.company;
        a2.technologies=req.body.technologies;
        a2.countriesAllies=req.body.countriesAllies;
        a2.workercount=req.body.workercount;
    
    const a3=await a2.save();
    res.json(a3);

    }
    catch(err){
        res.send("Error:"+ err);
    }
});
router.delete('/:id',async(req,res)=>{
    try{
        const companies = await Company.findById(req.params.id);
        companies.company=req.body.company;
        const delCompany=await companies.remove();
        res.json(delCompany);
    }catch(err)
    {
   res.send("Error:" + err);
    }
   });
module.exports=router;