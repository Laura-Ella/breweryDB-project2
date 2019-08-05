const Brewery = require("../models/brewery")
const Location = require("../models/location")

const breweries = require('../dataBreweries.json')
const locations = require('../dataLocations.json')

Brewery.find({}).then(allBreweries => {
    Location.find({}).then(allLocations => {
        var objId = allLocations.map(loc => {
            return loc
        });
        for (let i = 0; i < allBreweries.length; i++) {
            for (let j = 0; j < objId.length; j++) {
                if (allBreweries[i].name === objId[j].name) {
                    allBreweries[i].location = objId[j]
                }
            }
        }
    })
})
