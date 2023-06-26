const express=require('express');
const router = express.Router();

let Boutique = require('../models/BoutiqueModel');


router.route('/addBoutique').post((req, res) => {
    const Name = req.body.Name;
    const Category = req.body.Category;
    const Location = req.body.Location;
    const Contact=req.body.Contact;
    const Booking = req.body.Booking;
    const Image = req.body.Image;

    const BoutiqueHotel = new Boutique({
        Name, 
        Category,
        Location,
        Contact,
        Booking,
        Image
    });

    BoutiqueHotel.save()
    .then(() => res.json('Hotel added !'))
    .catch (err => res.status(400).json('Error: ' + err))
});

router.route("/Display").get((req,res)=>{
    Boutique.find().then((Boutique)=>{
 res.json(Boutique)
    }).catch(()=>{
        console.log(err)
    })
})



router.route("/updateBoutique/:id").put(async(req,res) => {
    let userId = req.params.id;
    const{  Name,Category,Location,Contact,Booking,Image} =req.body;
 
     const editBoutique={
      Name,
     Category,
     Location,
     Contact,
     Booking,
     Image,
   
     }
   const update= await Boutique.findByIdAndUpdate(userId,editBoutique).then(()=>{
    res.status(200).send({status:"Hotel updated"})
   }).catch((err)=>{
    console.log(err);
    res.status(500).send({status:"error with updating data",error:err.message});
   })
   })

   router.route("/get/Boutique/:id").get(async (req, res)=>{
    let userId = req.params.id;
    const employeeOne = await Boutique.findById(userId)
      .then((boutiquehotels)=>{
        res.status(200).send({status: "Hotel details Fetched", boutiquehotels})
      }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({status: "Error with get hotel details",error:err.message});
        
    })
  })

  router.route('/delete/:id').delete((req, res) => {
    Boutique.findByIdAndDelete(req.params.id)
      .then(() => res.json('Hotel deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });
  
  
  module.exports = router;