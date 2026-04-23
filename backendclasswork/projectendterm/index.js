const express=require('express');
const app=express();
app.set('view engine','ejs');
app.get('',(req,res)=>{
    let student={
        name:"ayush",
        rollno:2415000402,
        email:"ayush.dixit_cs24@gla.ac.in",
        age:19,
        hobbies:["cricket","bgmi","volleyball"]
    }
    res.render('home',{student});
});
app.listen(3000);
// <!-- <% student.hobbies.forEach(hobby => { %>
//     <h2><%= hobby %></h2>
// <% }) %> -->
