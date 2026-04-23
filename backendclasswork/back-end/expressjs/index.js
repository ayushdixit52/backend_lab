const express=require("express");
const app=express();
let port=3000;

app.listen(port,()=>{
    console.log(`server is running ${port}`);
})

app.get("/",(req,res)=>{
    res.send("home page open");
})

app.get("/se",(req,res)=>{
   res.send("hello sir can you tell me");
})

// app.get("*",(req,res)=>{
//     res.send("path does not exist");
// })

app.get("/:username/:id",(req,res)=>{
    let {username,id}=req.params;
    let code=`<h1>welcome to the page of @${username}</h1>`;
    res.send(code);
})

app.get("/search",(req,res)=>{
    let {q}=req.query;
    res.send(`<h1>response send for @${q}`);
})


// app.use((req,res)=>{

//     console.log("request receive");
//     let code="<h1>Happy new year</h1><ul><li>2025</li><li>2026</li></ul>";
//     res.send(code);

// })




//  caret use for version updation micro and minor auto update
// ~ => micro update
// @=> ye micro minor and mojor teeno ko update krte h but hume isko less hi use krna h 
