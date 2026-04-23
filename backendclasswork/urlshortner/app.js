const express = require('express');
const app = express();

const connectDB = require('./config/db');
const urlRoutes = require('./routes/urlRoute');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use('/url', urlRoutes);

app.get('/', (req, res) => {
    res.send("Server running");
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
