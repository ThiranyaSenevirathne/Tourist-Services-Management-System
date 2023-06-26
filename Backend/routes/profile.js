const user = require("../models/profile");
const router = require('express').Router()


const mongoose = require("mongoose");
const { protectedUser} = require("../middlewares/route-authorization");

router.route("/get").get(protectedUser,async (req,res)=>{
  try {
    if (!req.user) {
      res.status(422).json({
        success: false,
        desc: "Can not find the user - Please check again",
      });
    } else {
      res.status(200).send({
        profile: req.user,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      desc: "Error in getProfileData controller-" + error,
    });
  }
})

router.route("/deleteprofile/:id").delete(protectedUser,async (req,res)=>{
    let Id = req.params.id;
  
    if (!mongoose.Types.ObjectId.isValid(Id))
      return res.status(404).send(`No User with id: ${Id}`);
  
    try {
      await user.findByIdAndDelete(Id);
      res.status(200).json({ status: "User profile deleted" });
    } catch (error) {
      res.status(500).json({ status: "Internal server error", error });
    }
})

// Get Data
router.route("/users").get((req,res)=>{
  user.find().then((user)=>{
      res.json(user)
  }).catch((err)=>{
      console.log(err)
  })
})

module.exports = router;