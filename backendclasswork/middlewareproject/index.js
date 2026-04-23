const express=require('express');
const app=express();
const reqAge = require('./middleware/middleware.js');
const router=express.Router();
router.use(reqAge);
app.use(reqAge);
app.get('',(req,res)=>{
    res.send("welcome to home page");
})
app.get('/about',reqAge,(req,res)=>{
    res.send("welcome to about page");
})

router.get('/contact',(req,res)=>{
    res.send("welcome to contact us page");
})

app.use(router);

app.listen(3000,()=>{

})