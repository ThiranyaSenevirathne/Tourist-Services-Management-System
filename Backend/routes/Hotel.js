
const express=require('express');
const router = express.Router();

let Hotel = require('../models/HotelModel');


router.route('/add').post((req, res) => {
    const Name = req.body.Name;
    const Category = req.body.Category;
    const Location = req.body.Location;
    const Contact=req.body.Contact;
    const Booking = req.body.Booking;
    const Image = req.body.Image;

    const AddHotel = new Hotel({
        Name, 
        Category,
        Location,
        Contact,
        Booking,
        Image
    });

    AddHotel.save()
    .then(() => res.json('Hotel added !'))
    .catch (err => res.status(400).json('Error: ' + err))
});

router.route("/view").get((req,res)=>{
    Hotel.find().then((Hotel)=>{
 res.json(Hotel)
    }).catch(()=>{
        console.log(err)
    })
})



router.route("/update/:id").put(async(req,res) => {
    let userId = req.params.id;
    const{  Name,Category,Location,Contact,Booking,Image} =req.body;
 
     const editHotel={
      Name,
     Category,
     Location,
     Contact,
     Booking,
     Image,
   
     }
   const update= await Hotel.findByIdAndUpdate(userId,editHotel).then(()=>{
    res.status(200).send({status:"user updated"})
   }).catch((err)=>{
    console.log(err);
    res.status(500).send({status:"error with updating data",error:err.message});
   })
   })

   router.route("/get/:id").get(async (req, res)=>{
    let userId = req.params.id;
    const employeeOne = await Hotel.findById(userId)
      .then((addhotels)=>{
        res.status(200).send({status: "Hotel details Fetched", addhotels})
      }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({status: "Error with get hotel details",error:err.message});
        
    })
  })

  router.route('/delete/:id').delete((req, res) => {
    Hotel.findByIdAndDelete(req.params.id)
      .then(() => res.json('Hotel deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  
  module.exports = router;