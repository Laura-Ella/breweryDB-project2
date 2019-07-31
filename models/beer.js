const mongoose = require("../db/connection")
const Schema = mongoose.Schema

const Beer = new Schema({ 
    name: String,
    abv: Number,
    ibu: Number,
    description: String
})

module.exports = mongoose.model("Beer", Beer)