const mongoose = require("../db/connection")
const Schema = mongoose.Schema

const Location = new Schema({ 
    streetAddress: String,
    locality: String,
    region: String,
    postalCode: String,
    countryIsoCode: String,
    brewery: {
        type: String
    }
})

module.exports = mongoose.model("Location", Location)