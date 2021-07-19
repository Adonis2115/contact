const express = require("express")
const router = express.Router()
bodyParser = require('body-parser').json()

router.use(bodyParser)

router.post('/', (req,res) => {
    console.log(req.body)
    res.status(200).send()
})

module.exports = router