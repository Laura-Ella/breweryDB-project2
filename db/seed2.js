const mongoose = require("../connection")
const breweryData = require("../dataBreweries.json")
const Brewery = require("../models/Brewery")
const Location = require("..models/Location")

Brewery.find({}).then(brewery => brewery.forEach(brewery =>
    breweryData.filter( breweryData =>{
        if(locations.data.brewery.id === breweries.data.id) {

    })))

for (let i = 0; i < breweries.data.length; i++) {
    for (let j = 0; j < locations.data.length; j++) {
        if (locations.data[j].brewery.name === breweries.data[i].name) {
            console.log(locations.data[j].brewery.name)
            console.log(breweries.data[i].name)
            Brewery.find({"name": breweryData.data[i].name}).then(brewery => 
                brewery.forEach(brewery => brewery))
        }
    }
}
