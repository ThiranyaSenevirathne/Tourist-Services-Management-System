
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const app = express()
require("dotenv").config()

const PORT = process.env.PORT || 8070

app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

const URL = process.env.MONGODB_URL

mongoose.connect(URL, {
    //useCreateIndex: true,
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
    //useFindAndModify: false
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log('Mongo db connection success')
    console.log("you're good to go >>>")
}); 

app.listen(PORT, () => {
    console.log("Server running on port: " + PORT);
})


// Udantha
const districtRouter = require("./routes/district.js") 
app.use("/district",districtRouter);
const locationtRouter = require("./routes/location.js") 
app.use("/location",locationtRouter);
const authRouter = require("./routes/authentication.js") 
app.use("/auth",authRouter);
const profileRouter = require("./routes/profile.js") 
app.use("/profile",profileRouter);
// Udantha

// Thiranya
const HotelRouter = require('./routes/Hotel');
app.use("/Hotel", HotelRouter); 
const BoutiqueRouter = require('./routes/Boutique');
app.use("/Boutique",BoutiqueRouter);
const GuestHouseRouter = require('./routes/GuestHouse');
app.use("/GuestHouse",GuestHouseRouter);
// Thiranya

// Chamath
const blogRouter = require ("./routes/blogs.js");
const travelRouter = require ("./routes/travels.js");
app.use("/travel",travelRouter)
app.use("/blog",blogRouter)
// Chamath

// Sithmi
const guideRouter = require ("./routes/guides.js");
app.use("/guide",guideRouter)
const femaleGuideRouter = require ("./routes/femaleGuides.js");
app.use("/femaleGuide",femaleGuideRouter)
// Sithmi