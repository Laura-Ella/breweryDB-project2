const Brewery = require("../models/brewery")
const Location = require("../models/location")

const breweries = require('../dataBreweries.json')
const locations = require('../dataLocations.json')

Location.find({}).then(allLocation => {
    allLocation.forEach( thisLocation => {
        Brewery.findOneAndUpdate({name: thisLocation.name}, {$set: {location:thisLocation._id}},{new:true}).then(updated => {
            console.log(updated)
        })
    })
})