const mongoose = require("../db/connection")
const Schema = mongoose.Schema

const Location = new Schema({ 
    brewery: {
        name: String,
        description: String
    },
    streetAddress: String,
    locality: String,
    region: String,
    postalCode: String,
    countryIsoCode: String
})

module.exports = mongoose.model("Location", Location)