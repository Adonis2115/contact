const express = require("express")
const router = express.Router()
bodyParser = require('body-parser').json()
const Contact = require("../models/contact")

router.use(bodyParser)

router.post('/add', (req,res) => {
    const newContact = new Contact({
        name : req.body.name,
        email : req.body.email,
        phone : req.body.phone
    })
    try{
     newContact.save()
     console.log("Hello")
    }
    catch(err){
        console.log(err)
    }
})

module.exports = router