const mongoose = require("../db/connection")
const Schema = mongoose.Schema

const Brewery = new Schema({ 
    data: String,
    location: {
        street: String,
        city: String,
        State: String,
    },
    type: String
})

module.exports = mongoose.model("Brewery", Brewery)