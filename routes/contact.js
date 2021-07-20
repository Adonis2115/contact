const express = require("express")
const router = express.Router()
bodyParser = require('body-parser').json()
const Contact = require("../models/contact")

router.use(bodyParser)

router.post('/add', async (req,res) => {
    const newContact = new Contact({
        name : req.body.name,
        email : req.body.email,
        phone : req.body.phone
    })
    try{
     await newContact.save()
     res.sendStatus(200)
    }
    catch(err){
        console.log(err)
    }
})

router.get('/list', async (req,res) => {
    try{
        const allContact = await Contact.find()
        res.send(allContact)
    } catch (e) {
        res.status(500).send(e)
    }
})

// make a params request
router.post('/read', async (req,res) => {
    try{
        const id = req.body.id
        const oneContact = await Contact.findById(id)
        if(!oneContact){
            res.status(404).send("No Contact")
        }
        else {
            res.send(oneContact)
        }
    } catch (e) {
        console.log(e)
        res.status(500).send(e)
    }
})

module.exports = router