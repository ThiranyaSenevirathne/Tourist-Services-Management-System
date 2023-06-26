const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const locationSchema = new Schema({
    district: { 
        type: String,
        required: true 
    },
    name: { 
        type: String,
        required: true 
    },
    desc: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    imgurl: {
        type: String,
        required: true
    }
})

const location = mongoose.model("location",locationSchema);
module.exports = location;