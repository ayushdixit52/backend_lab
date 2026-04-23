const express = require('express');
const app = express();

const { resultfilter, logfile } = require('./middleware');

app.use(resultfilter);
app.use(logfile);

app.use((req, res, next) => {
    console.log("hello from second middleware.. " + req.name);
    next();
});

app.get('/', (req, res) => {
    res.send("Hello");
});

app.listen(8000, () => {
    console.log("Server running on http://localhost:8000");
});