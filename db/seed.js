const beers = require('../dataBeers.json')
const breweries = require('../dataBreweries.json')
const locations = require('../dataLocations.json')

const Beer = require('../models/beer')
const Brewery = require('../models/brewery')
const Location = require('../models/location')

// Brewery.find({}).deleteMany(() => {
//     breweries.data.forEach(brew => {
//         Brewery.create({
//             name: brew.name,
//             nameShortDisplay: brew.nameShortDisplay,
//             description: brew.description,
//             website: brew.website,
//             location: [Location]
//         }).then(brewery => {
//             brewery.save()
//             console.log(brewery)
//         })
//     })
// })

// Brewery.deleteMany({})
//     .then(b => {
//         const breweriesData = breweries.data.map(brew => {
//             var brewObject = {
//                 name: brew.name,
//                 nameShortDisplay: brew.nameShortDisplay,
//                 description: brew.description,
//                 website: brew.website,
//                 location: []
//             }
//             return brewObject
//         });

//         Brewery.collection.insert(breweriesData)
//             .then(check => {
//                 console.log(check)
//             })
//     })

// Location.deleteMany({})
//     .then(l => {
//         const locationsData = locations.data.map(loc => {
//             var locationObject = {
//                 name: loc.brewery.name,
//                 streetAddress: loc.streetAddress,
//                 locality: loc.locality,
//                 region: loc.region,
//                 postalCode: loc.postalCode,
//                 countryIsoCode: loc.countryIsoCode
//             }
//             return locationObject
//         });

//         Location.collection.insert(locationsData)
//             .then(here => {
//                 console.log(here)
//             })
//     })

// Beer.deleteMany({})
//     .then(r => {
//         const beersData = beers.data.map(beer => {
//             var beerObject = {
//                 name: beer.name,
//                 abv: beer.abv,
//                 ibu: beer.ibu,
//                 description: beer.description
//             }
//             return beerObject
//         });

//         Beer.collection.insert(beersData)
//             .then(last => {
//                 console.log(last)
//             })
//     })

