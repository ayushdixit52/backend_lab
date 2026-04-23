const url=require("url");

const address='https://www.example.com/search?name=ayush&sec=fc';

// const myurl=url.parse(address,true);
const myurl=new URL(address);
console.log(myurl);