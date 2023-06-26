const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BoutiqueSchema =new Schema({
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

const BoutiqueHotel = mongoose.model("BoutiqueHotel",BoutiqueSchema);
module.exports = BoutiqueHotel;