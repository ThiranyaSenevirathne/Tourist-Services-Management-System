const express=require('express');
const router = express.Router();

let Guest = require('../models/GuestHouseModel');


router.route('/addGuestHouse').post((req, res) => {
    const Name = req.body.Name;
    const Category = req.body.Category;
    const Location = req.body.Location;
    const Contact=req.body.Contact;
    const Booking = req.body.Booking;
    const Image = req.body.Image;

    const GuestHouse = new Guest({
        Name, 
        Category,
        Location,
        Contact,
        Booking,
        Image
    });

    GuestHouse.save()
    .then(() => res.json('Hotel added !'))
    .catch (err => res.status(400).json('Error: ' + err))
});

router.route("/Display1").get((req,res)=>{
    Guest.find().then((GuestHouse)=>{
 res.json(GuestHouse)
    }).catch(()=>{
        console.log(err)
    })
})



router.route("/updateGuest/:id").put(async(req,res) => {
    let userId = req.params.id;
    const{  Name,Category,Location,Contact,Booking,Image} =req.body;
 
     const editGuest={
      Name,
     Category,
     Location,
     Contact,
     Booking,
     Image,
   
     }
   const update= await Guest.findByIdAndUpdate(userId,editGuest).then(()=>{
    res.status(200).send({status:"Hotel updated"})
   }).catch((err)=>{
    console.log(err);
    res.status(500).send({status:"error with updating data",error:err.message});
   })
   })

   router.route("/get/Guest/:id").get(async (req, res)=>{
    let userId = req.params.id;
    const employeeOne = await Guest.findById(userId)
      .then((guesthouses)=>{
        res.status(200).send({status: "Hotel details Fetched", guesthouses})
      }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({status: "Error with get hotel details",error:err.message});
        
    })
  })

  router.route('/delete/:id').delete((req, res) => {
    Guest.findByIdAndDelete(req.params.id)
      .then(() => res.json('Hotel deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  
  module.exports = router;