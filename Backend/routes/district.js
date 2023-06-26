//const express = require(express);
// const router = express.Router(); 
const router = require('express').Router()
let district = require("../models/district.js");

// Post Data
router.route("/add").post((req,res)=>{
    const name = req.body.name;
    const desc = req.body.desc;
    const imgurl = req.body.imgurl;
    const ant = Number(req.body.ant);
    const lat = Number(req.body.lat);

    const newDistrict = new district({
        name,
        desc,
        imgurl,
        ant,
        lat
    })
    newDistrict.save()
    .then(()=>{
        res.json("District Added ")
    }).catch((err)=>{
        //console.log(err.message);
        console.log("Error IN POST");
    })
})

// Get Data
router.route("/get").get((req,res)=>{
    district.find().then((district)=>{
        res.json(district)
    }).catch((err)=>{
        console.log(err)
    })
})


//Get Specific Data
router.route("/get/:id").get(async(req,res) => {
    const id = req.params.id;
    await district.findById(id)
    .then(()=>{
        res.status(200).send({status:"Fetched",district:district})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status:"Failed",message:err.message})
    })
})






// Update Data
router.route("/update/:id").put(async(req,res)=>{
    let id = req.params.id;
    const {name,desc,ant,lat,imgurl} = req.body;

    const updateDestrict = {
        name,
        desc,
        imgurl,
        ant,
        lat
    }
    const updatedDistrict = await district.findByIdAndUpdate(id,updateDestrict)
    .then(()=>{
        res.status(200).send({status:"Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data "})
    })
})

//Delete data
router.route("/delete/:id").delete(async(req,res) => {
    let id = req.params.id;

    await district.findByIdAndDelete(id)
    .then(() => {
        res.status(200).send({status:"Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete", error:err.message});
    })
})




module.exports = router;