//const express = require(express);
// const router = express.Router(); 
const router = require('express').Router()
let location = require("../models/location.js");

// Post Data
router.route("/add").post((req, res) => {
    const district = req.body.district;
    const name = req.body.name;
    const desc = req.body.desc;
    const category = req.body.category;
    const imgurl = req.body.imgurl;

    const newLocation = new location({
        district,
        name,
        desc,
        category,
        imgurl,
    })
    newLocation.save()
        .then(() => {
            res.json("Location Added ")
        }).catch((err) => {
            //console.log(err.message);
            console.log("Error IN POST");
        })
})

// Get Data
router.route("/get").get((req, res) => {
    location.find().then((location) => {
        res.json(location)
    }).catch((err) => {
        console.log(err)
    })
})


//Get Specific Data
router.route("/get/:id").get(async (req, res) => {
    const id = req.params.id;
    await location.findById(id)
        .then(() => {
            res.status(200).send({ status: "Fetched", location: location })
        }).catch(() => {
            console.log(err.message);
            res.status(500).send({ status: "Failed", message: err.message })
        })
})




//Get by district 
router.route('/get_by/:district').get((req, res) => {

    let district = req.params.district
    //let amountV = req.params.amount
    location.find({district:district})  
        .then((location) => {
            res.json(location)
        })
        .catch((err) => {
            console.log(err)
        })
});





// Update Data
router.route("/update/:id").put(async (req, res) => {
    let id = req.params.id;
    const { district, name, desc, category, imgurl } = req.body;

    const updateDestrict = {
        district,
        name,
        desc,
        category,
        imgurl,
    }
    const updateLocation = await location.findByIdAndUpdate(id, updateLocation)
        .then(() => {
            res.status(200).send({ status: "Updated", location: updateLocation })
        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with updating data " })
        })
})

//Delete data
router.route("/delete/:id").delete(async (req, res) => {
    let id = req.params.id;

    await location.findByIdAndDelete(id)
        .then(() => {
            res.status(200).send({ status: "Deleted" });
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with delete", error: err.message });
        })
})




module.exports = router;