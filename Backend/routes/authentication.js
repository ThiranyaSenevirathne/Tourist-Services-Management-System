const router = require('express').Router()
let profile = require("../models/profile.js");
const { cloudinary } = require("../utils/cloudinary");

// Post Data
router.route("/reg").post(async (req,res)=>{
    // register new user
    const {  email, password , username,role,fileEnc } = req.body;
  //check for users with same email address within customer collection
  let existingEmail = await findUserByEmail(email);
  if (existingEmail) {
    existingEmail = null;
    res.status(401).json({
      success: false,
      desc: "Email already exist - Please check again",
    });
  } else {
      try {   
        const profileimage = await cloudinary.uploader.upload(fileEnc, {
          upload_preset: "ssd_assignment",
        });
        
        const admin = await profile.create({
          email,
          password,
          username,
          role,
          profilePicture: {
            imagePublicId: profileimage.public_id,
            imageSecURL: profileimage.secure_url,
          }
  
        });
        const token = await admin.getSignedToken();
        res.status(201).json({ success: true, token });
      } catch (error) {
        res.status(500).json({
          success: false,
          desc: "Error in admin  controller-" + error,
        });
      }
    }
    
})


router.route("/login").post(async (req,res)=>{
    const { email, password } = req.body;
    //check user
    let user;
   
      user = await profile.findOne({ email: email }).select("+password");
    
    //check password match
    try {
      const isMatch = await user.matchPasswords(password);
  
      if (!isMatch) {
        res.status(401).send({
          success: false,
          desc: "Invalid credentials - Please check again",
        });
      } else {
        sendToken(user, 200, res);
      }
    } catch (error) {
      next(error);
    }

})

//send response object to client if login success
const sendToken = (user, statusCode, res) => {
    const token = user.getSignedToken();
    res.status(statusCode).json({ sucess: true, token, user });
  };
  
  
  //find duplicated user emails when creating new users
  const findUserByEmail = async (email) => {
    let existingAccount;
    try {
      existingAccount = await profile.findOne({ email: email });
      return existingAccount;
    } catch (err) {
      res.status(422).json({
        success: false,
        desc: "Error occured in findUserByEmail segment",
        error: err.message,
      });
    }
  };

  module.exports = router;