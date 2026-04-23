const reqAge=(req,res,next)=>{
    const age=req.query.age
    if(!age){
     res.send("please provide your age:");
    }
    else if(age<18){
        res.send("you are not authorised");
    }
    else{
        next();
    }
}

module.exports=reqAge;
