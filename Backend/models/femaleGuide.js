const mongoose =  require('mongoose')
const schema = mongoose.Schema;

//database structure 
const fguidRegistrationSchema = new schema({
    fullName:{
        type : String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    languages:{
        type: String,
        required: true
    
    },
    description:{
        type: String,
        required: true

    },
    contactNo:{
        type: String,
        required: true
        
    }, 
    Email:{
        type: String,
        required: true
    
    },   
})

const femaleGuide = mongoose.model("AnnualfGuide",fguidRegistrationSchema);

module.exports = femaleGuide;