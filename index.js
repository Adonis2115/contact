const express = require("express")
const app = express()
const dotenv = require('dotenv')
const mongoose = require("mongoose");
dotenv.config();

const router_views = require('./routes/views.js')
const router_contact = require('./routes/contact.js')
const Contact = require("./models/contact")

app.use(router_views)
app.use(router_contact)
app.use(Contact)

//connection to db
mongoose.set("useFindAndModify", false)
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
console.log(process.env.DB_CONNECT);
app.listen(3000, () => console.log("Server Up and running"));
});

module.exports = app