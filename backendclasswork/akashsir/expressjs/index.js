const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`<h1>hello express</h1> <a href='/about'>Click here about page</a>  <a href='/contact'>Click here contact page</a> `);
});
app.get('/about', (req, res) => {
  res.send('Hello about');
});
app.get('/contact', (req, res) => {
  res.send('Hello contact');
});
app.get('/search', (req, res) => {
  // console.log(req.query);
  // res.send(`<h1>search result found</h1> ${req.query.name}
  //   <a href='/about'>Click here about page</a>`);

  const data=req.query.name;
  if(!data){
    res.send("hello,search result not served");
  }
  else{
    res.send("hello,welcome"+data);
  }
});

app.listen(8000, () => {
  console.log('Server running on http://localhost:8000');
  
});