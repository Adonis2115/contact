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

router.get('/read/:id', async (req,res) => {
    try{
        const id = req.params.id
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

router.patch("/update/:id", async (req,res)=>{
    const {id} = req.params;
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'phone', 'email']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if(!isValidOperation){
        return res.status(400).send({error: 'Invalid Updates'})
    }
    try {
        const updateContact = await Contact.findById(id)
        if(!updateContact){
            return res.status(404).send("No Contact Found")
        }  
        else{
            updates.forEach((update) => updateContact[update] = req.body[update])
            await updateContact.save()
            res.send(updateContact)
        }
    }
    catch(err) {
        res.status(400).send(err)
    }
})


module.exports = router