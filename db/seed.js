const beers = require('../dataBeers.json')
const breweries = require('../dataBreweries.json')
const locations = require('../dataLocations.json')

console.log(locations)
console.log(breweries)
console.log(beers)

const Beer = require('../models/beer')
const Brewery = require('../models/brewery')
const Location = require('../models/location')

Beer.deleteMany({}).then(b => Beer.create(beers.data))
Brewery.deleteMany({}).then(b => Brewery.create(breweries.data))
Location.deleteMany({}).then(b => Location.create(locations.data))


