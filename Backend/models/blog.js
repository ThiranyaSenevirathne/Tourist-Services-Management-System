const mongoose =  require('mongoose')
const schema = mongoose.Schema;

//database structure 
const blogSchema = new schema({
    blogName:{
        type : String,
        required : true,
        
    },
    
    authorName : {
        type : String,
        required : true,
    },
    imageURL: {   
        type : String,
    },

    location : {
        type : String,
    },

    description : {
        type : String,
    }
})

const blog = mongoose.model("Allblog",blogSchema);


module.exports = blog;