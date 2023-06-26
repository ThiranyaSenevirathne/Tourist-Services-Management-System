const router = require ("express").Router();
let travel = require ("../models/travel");




//inserting data to the table(CREATE)
router.route("/add").post((req,res)=>{
    const partnerName = req.body.partnerName;
    const address = req.body.address;
    const contactNumber = req.body.contactNumber;
    const rate = req.body.rate;
    const imageURL = req.body.imageURL;
    const description = req.body.description;



    const newDem = new travel({
        partnerName,
        address,
        contactNumber,
        rate, 
        imageURL,
        description
        
    })

    newDem.save()
    .then(()=>{
        res.json("Travel Partner was Successfully Added")
    }).catch((err)=>{
        console.log(err);
    })
})
//retrive data from the database(READ)
router.route("/").get((req,res)=>{
    travel.find().then((travels)=>{
        res.json(travels)
    }).catch((err)=>{
        console.log(err);
    })
})

//update data of the  database
router.route("/update/:id").put(async(req,res)=>{
    let travelID = req.params.id;
    const {partnerName,address,contactNumber,rate, imageURL,description} = req.body;

    const updateDetails = {
        partnerName,
        address,
        contactNumber,
        rate, 
        imageURL,
        description
    }
    const update = await travel.findByIdAndUpdate(travelID,updateDetails)
    .then(()=>{
        res.status(200).send({ status : "User updated "})
    }).catch((err)=>{
        console.log(err);
    })

})

//deleting data from the database
router.route("/delete/:id").delete(async(req,res)=>{
    let travelID = req.params.id;

    await travel.findByIdAndDelete(travelID)
    .then(()=>{
        res.status(200).send({status: "User deleted"});

    }).catch((err)=>{
        console.log(err);
    })

})

//Get by ID
router.route("/get/%20:id").get(async (req, res) => {
    let travelID = req.params.id;
    const travelData = await travel.findById(travelID)
        .then((travel) => {
            res.status(200).send({ status: "fetched",travel: travel})
        })
        .catch((err) => {
            console.log(err.mesage);
            res.status(500).send({ status: "Error " })
        })
})



module.exports = router;
