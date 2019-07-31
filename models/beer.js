const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Beer = new Schema({ 
    name: String,
    abv: Number,
    ibu: Number,
    description: String
})

module.exports = mongoose.models("Beer", Beer)