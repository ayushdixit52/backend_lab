const fs=require('fs');
fs.writeFileSync('config.txt','Server Port :3000\n');
fs.appendFileSync('config.txt','Environment :Production\n');
fs.appendFileSync('config.txt','Database :MongoDb\n');
const fr=fs.readFileSync('config.txt','utf-8');
console.log(fr);
fs.cpSync('config.txt','config_backup.txt');
fs.renameSync('config_backup.txt','backup_config.txt');
console.log("backup created");
fs.unlinkSync('config.txt');
console.log("Original config file created");


