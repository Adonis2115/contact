const express = require("express")
const app = express()


const router_views = require('./routes/views.js')
const router_contact = require('./routes/contact.js')

app.use(router_views)
app.use(router_contact)

app.listen(3000, () => console.log("Server Up and Running at 3000"))