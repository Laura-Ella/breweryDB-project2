const Brewery = require("../models/brewery")
const Location = require("../models/location")

const breweries = require('../dataBreweries.json')
const locations = require('../dataLocations.json')

Brewery.find({}).then(allBreweries => {
    Location.find({}).then(allLocations => {
        console.log(allBreweries)
        console.log(allLocations)
        // var objId = allLocations.map(loc => {
        //     return loc
        // });
        // console.log(objId)
        // var brew = allBreweries.map(brews => {
        //     return brews
        // })
        // console.log(brew)
        for (let i = 0; i < allBreweries.length; i++) {
            for (let j = 0; j < objId.length; j++) {
                // console.log(allBreweries)
                if (allBreweries[i].name === objId[j].name) {
                    allBreweries[i].location = objId[j]
                }
            }
        }
    })
})