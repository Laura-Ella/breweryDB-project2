const Brewery = require("../models/brewery")
const Location = require("../models/location")

const breweries = require('../dataBreweries.json')
const locations = require('../dataLocations.json')

Brewery.find({}).then(allBreweries => {
    Location.find({}).then(allLocations => {
        for (let i = 0; i < allBreweries.length; i++) {
            for (let j = 0; j < allLocations.length; j++) {
                if (allBreweries[i].name === allLocations[j].name) {
                    allBreweries[i].location.push(allLocations[j])
                    console.log(allBreweries)
                }
            }
        }
    })
})