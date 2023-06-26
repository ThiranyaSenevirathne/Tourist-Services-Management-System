const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GuestHouseSchema =new Schema({
    Name : {
        type : String,
        required:true
    },
    Category:{
        type:String,
        required:true
    },
    Location:{
        type:String,
        required:true
    },
    Contact:{
        type:String,
        required:true
    },
    Booking:{
        type:String,
        required:true
    },
    Image:{
       type:String,
       required:true
    }

})

const GuestHouse = mongoose.model("GuestHouse",GuestHouseSchema);
module.exports = GuestHouse;