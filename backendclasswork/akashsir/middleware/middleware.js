const fs = require('fs');


const resultfilter = (req, res, next) => {
    console.log("hello from middleware");

    req.name = "Ayush";  

    next(); 
};


const logfile = (req, res, next) => {
    console.log("Middleware second call....");

    const date = new Date();

    const log = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} : ${req.method} ${req.path}\n`;

    fs.appendFile('log.txt', log, (err) => {
        if (err) console.log(err);
    });

    next();
};

module.exports = {
    resultfilter,
    logfile
};

