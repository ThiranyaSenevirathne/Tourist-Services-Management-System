const router = require ("express").Router();
let blog = require ("../models/blog");




//inserting data to the table(CREATE)
router.route("/add").post((req,res)=>{
    const blogName = req.body.blogName;
    const authorName = req.body.authorName;
    const imageURL = req.body.imageURL;
    const location = req.body.location;
    const description = req.body.description;



    const newDem = new blog({
        blogName,
        authorName,
        imageURL,
        location, 
        description,
        
    })

    newDem.save()
    .then(()=>{
        res.json("Blog was Successfully Added")
    }).catch((err)=>{
        console.log(err);
    })
})


//retrive data from the database(READ)
router.route("/").get((req,res)=>{
    blog.find().then((blogs)=>{
        res.json(blogs)
    }).catch((err)=>{
        console.log(err);
    })
})

//update data of the  databas
router.route("/update/:id").put(async(req,res)=>{
    let blogID = req.params.id;
    const {blogName,authorName,imageURL,location, description} = req.body;

    const updateDetails = {
        blogName,
        authorName,
        imageURL,
        location, 
        description,
    }
    const update = await blog.findByIdAndUpdate(blogID,updateDetails)
    .then(()=>{
        res.status(200).send({ status : "User updated "})
    }).catch((err)=>{
        console.log(err);
    })

})


//deleting data from the database
router.route("/delete/:id").delete(async(req,res)=>{
    let blogID = req.params.id;

    await blog.findByIdAndDelete(blogID)
    .then(()=>{
        res.status(200).send({status: "User deleted"});

    }).catch((err)=>{
        console.log(err);
    })

})

//Get by ID
router.route("/get/%20:id").get(async (req, res) => {
    let blogID = req.params.id;
    const blogData = await blog.findById(blogID)
        .then((blog) => {
            res.status(200).send({ status: "fetched",blog: blog})
        })
        .catch((err) => {
            console.log(err.mesage);
            res.status(500).send({ status: "Error " })
        })
})



module.exports = router;