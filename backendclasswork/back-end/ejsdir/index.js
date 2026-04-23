const express=require("express");
const app=express();
const port=8080;
const path=require("path");


app.set("view engine","ejs");

app.set("views",path.join(__dirname,"./views"));

app.get("/",(req,res)=>{
    res.render("home.ejs");
})

app.get("/ig/:username",(req,res)=>{
    const followers=["adam","ayush","akash","ansh"];
    let {username}=req.params;
    res.render("insta.ejs",{username,followers});

})

app.get("/rolldice",(req,res)=>{
    let gentag=Math.floor(Math.random()*6)+1;
    res.render("rolldice",{gentag});
})
app.listen(port,()=>{
    console.log(`app is lisnining on ${port}`);
})