const mongoose = require("../db/connection")
const Schema = mongoose.Schema

const Brewery = new Schema({
    name: String,
    nameShortDisplay: String,
    description: String,
    website: String,
    location: [
        {
            type: Schema.Types.String,
            ref: "Location"
        }
    ],
})

module.exports = mongoose.model("Brewery", Brewery)