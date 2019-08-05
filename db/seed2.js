const Brewery = require("../models/brewery")
const Location = require("../models/location")

const breweries = require('../dataBreweries.json')
const locations = require('../dataLocations.json')

Brewery.find({}).then(allBreweries => {
    Location.find({}).then(allLocations => {
        var objId = allLocations.map(loc => {
            return loc
        });
        console.log(objId)
        for (let i = 0; i < allBreweries.length; i++) {
            allBreweries[i].location = objId[i];
            allBreweries[i].save();
        }
    })
})

