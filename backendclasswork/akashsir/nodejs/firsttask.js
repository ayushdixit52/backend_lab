const fs=require("fs");
// const fd=fs.openSync("secfc.txt","w+");
// fs.writeSync(fd,"hellooooo\n my name is ayush");

// const buffer=Buffer.alloc(100);
// const data=fs.readSync(fd,buffer,0,buffer.length,0);
// console.log(buffer.toString("utf8",0,data));
 


const fw=fs.writeFileSync("secfc.txt","hello secfc\n",{flag:"w"});
console.log(fw);
console.log(fs.readFileSync("secfc.txt","utf8"));
const fa=fs.appendFileSync("secfc.txt","hello");
console.log(fa);
fs.renameSync("secfc.txt","fc.txt");
fs.cpSync("fc.txt", "copy_fc.txt");
fs.unlinkSync("copy_fc.txt");




// async 
// fs.writeFile("fc.txt","hello section fc",(err)=>{
//     if(err) console.log(err);
//     console.log("file created successfully");
// });

// fs.readFile("fc.txt","utf8",(err,data)=>{
//     if(err) console.log(err);
//     console.log(data);
// });

// ques -> file ka content character by character 

// const data=fs.readFileSync("fc.txt","utf8");
// for(let i=0;i<data.length;i++){
//     console.log(data[i]);
// }

// const stream=fs.createReadStream("fc.txt",{encoding:utf8});
// stream.on("data",(chunk)=>{
//     for(let ch of chunk){
//         console.log(ch);
//     }
// })


// const stream = fs.createReadStream("fc.txt", { encoding: "utf8" });

// stream.on("data", (chunk) => {
//     for (let ch of chunk) {
//         console.log(ch);
//     }
// });



// notes
// filesync vs writefile vs readfile vs writesync vs readsync.   imp

// opensync ->file open hogi bas
// writefilesync->inke pass power h file m write staring se krte h aur close bhi kr dete h file
// filesync->inke pass power h file ko open krne ki 
// readfilesync /filesync /opensync-> m flags use nhi hote toh mod use krne pdege 

// imp->
// ^-> writefilesync vs writefile vs writesync

// readline function ki help se terminal se data apne file m store krna h 








