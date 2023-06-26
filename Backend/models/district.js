const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const districtSchema = new Schema({
    name: { 
        type: String,
        required: true 
    },
    desc: {
        type: String,
        required: true
    },
    imgurl: {
        type: String,
        required: true
    },
    ant:{
        type: Number,
        required: true
    },
    lat:{
        type: Number,
        required: true
    }
})

const district = mongoose.model("district",districtSchema);
module.exports = district;