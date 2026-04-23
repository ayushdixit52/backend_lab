const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Hello");
});


app.get('/cookie-profile', (req, res) => {
    res.cookie("uname", "sectionFC", {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: false
    });

    res.send("Cookie is setup successfully");
});

app.get('/get-cookie', (req, res) => {
    const user = req.cookies.uname;

    if (!user) {
        return res.send("No cookie found");
    }
    

    res.send(`Cookie value is: ${user}`);
});
app.get('/delete-cookie', (req, res) => {
    res.clearCookie("uname");
    res.send("Cookie deleted successfully");
});





app.listen(3000, () => {
    console.log("Server running");
});