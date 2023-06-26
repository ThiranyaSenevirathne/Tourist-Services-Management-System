const router = require ("express").Router();
let femaleGuide = require ("../models/femaleGuide");



router.route('/add').post((req, res) => {
    const fullName = req.body.fullName;
    const location = req.body.location;
    const languages = req.body.languages;
    const description = req.body.description;
    const contactNo = req.body.contactNo;
    const Email = req.body.Email;

    const newfguideRegistration = new femaleGuide({
    
    fullName,
    location,
    languages,
    description,
    contactNo,
    Email

    });
    newfguideRegistration.save()
    .then(() => res.json('female guide added !'))
    .catch (err => res.status(400).json('Error: ' + err))
});


//retrive data from the database(READ)
router.route("/").get((req,res)=>{
    femaleGuide.find().then((femaleGuides)=>{
        res.json(femaleGuides)
    }).catch((err)=>{
        console.log(err);
    })
})


//update data of the databas
router.route("/update/:id").put(async(req,res)=>{
    let fguideId = req.params.id;
    const {fullName,location,languages,description,contactNo,Email} = req.body;

    const updateDetails = {
        fullName,
        location,
        languages,
        description,
        contactNo,
        Email
    }
    const update = await femaleGuide.findByIdAndUpdate(fguideId,updateDetails)
    .then(()=>{
        res.status(200).send({ status : "guide updated "})
    }).catch((err)=>{
        console.log(err);
    })

})


//deleting data from the database
router.route("/delete/:id").delete(async(req,res)=>{
    let fguideId = req.params.id;



    await femaleGuide.findByIdAndDelete(fguideId)
    .then(()=>{
        res.status(200).send({status: "User deleted"});

    }).catch((err)=>{
        console.log(err);
    })

})


//Get by ID
router.route("/get/%20:id").get(async (req, res) => {
    let fguideId = req.params.id;
    const guideData = await femaleGuide.findById(fguideId)
        .then((femaleGuide) => {
            res.status(200).send({ status: "fetched",femaleGuide: femaleGuide})
        })
        .catch((err) => {
            console.log(err.mesage);
            res.status(500).send({ status: "Error " })
        })
})



module.exports = router;