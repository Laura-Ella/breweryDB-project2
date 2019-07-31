const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Brewery = new Schema({ 
    name: String,
    location: {
        street: String,
        city: String,
        State: String,
    },
    type: String
})