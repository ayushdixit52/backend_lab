const mongoose = require('mongoose');


const m = new mongoose.Schema({
    shorturl: {
        type: String,
        required: true,
        unique: true
    },
    actualurl: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const Url = mongoose.model('Url', m);

module.exports = {Url};