const beers = require('../dataBeers.json')
const breweries = require('../dataBreweries.json')
const locations = require('../dataLocations.json')

// console.log(locations.data[2].name)
// console.log(breweries)
// console.log(beers)

const Beer = require('../models/beer')
const Brewery = require('../models/brewery')
const Location = require('../models/location')

Beer.deleteMany({}).then(b => Beer.create(beers.data));
Brewery.deleteMany({}).then(b => Brewery.create(breweries.data));
Location.deleteMany({}).then(b => Location.create(locations.data))

// locations.data.forEach(location => {
//     console.log(locations.data)
// }),
// if(locations.data.brewery.id === breweries.data.id) {
//     console.log("hey")
// }
// console.log(location.brewery.name)
// Brewery.location.push(location.brewery.name)
// })

// for (let i = 0; i < breweries.data.length; i++) {
//     for (let j = 0; j < locations.data.length; j++) {
//         if (locations.data[j].brewery.name === breweries.data[i].name) {
//             console.log(locations.data[j].brewery.name)
//             console.log(breweries.data[i].name)
//         }
//     }
// }




// breweries.data.forEach(location => {
//     locations.data.forEach(locationTwo => {
//         if(locations.name === locationTwo.name) {
//             console.log(location.name, locationTwo.name)

//         }
//     })
// })