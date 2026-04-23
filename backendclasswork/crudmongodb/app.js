const express = require('express');
const app = express();

const mongoose = require('mongoose');

app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1:27017/mydatabase')
.then(() => console.log("database connected"))
.catch((err) => console.log(err));

const newSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    contact: {
        type: String,
        required: true
    }
}, { timestamps: true });

const model=mongoose.model('User',newSchema);

const User = mongoose.model('User', newSchema);

app.post('/user',async (req,res)=>{
    const data=req.body;
    const user=await user.create(data);
    res.json(user);
})

// app.get('/', (req, res) => {
//     res.send("Server is running");
// });


app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
