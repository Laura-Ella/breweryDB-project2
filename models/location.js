const mongoose = require("../db/connection")
const Schema = mongoose.Schema

const Location = new Schema({ 
    street: String,
    city: String,
    state: String
})

module.exports = mongoose.model("Location", Location)