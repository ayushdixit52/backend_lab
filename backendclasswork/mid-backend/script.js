const fs=require('fs');
fs.writeFile("hello.txt","my name is ayush",(err)=>{
   if(err) console.log(err);
   console.log("done");
})
// fs.unlink("hello.txt",(err)=>{
//     if(err) console.log(err);
//     console.log("removed");
// })