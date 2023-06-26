const mongoose =  require('mongoose')
const schema = mongoose.Schema;

//database structure 
const travelSchema = new schema({

    partnerName:{
        type : String,
        
    },
    
    address : {
        type : String,
        
    },

    contactNumber : {
        type : String,
        
    },

    rate : {
        type : String,
       
    },

    imageURL: { 
        type : String,  
       
    },

    description : {
        type : String,
    }
})

const travel = mongoose.model("Alltravel",travelSchema);


module.exports = travel;