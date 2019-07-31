const beers = require('./dataBeers.json')
const breweries = require('./dataBreweries.json')
const locations = require('./dataLocations.json')

console.log(locations)

const Beer = require('./models/beer')
const Brewery = require('./models/brewery')
const Location = require('./models/location')


Beer.deleteMany({}).then(Beer.create(beers))
Brewery.deleteMany({}).then(Brewery.create(breweries))
Location.deleteMany({}).then(Location.create(locations))


