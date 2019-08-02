// const mongoose = require("../db/connection")
// const Brewery = require("../models/Brewery")
// const Location = require("../models/Location")

// // Brewery.find({}).then(brewery => brewery.forEach(brewery =>
// //     breweryData.filter( breweryData =>{
// //         if(locations.data.brewery.id === breweries.data.id) {

// //     })))



// const beers = require('../dataBeers.json')
// const breweries = require('../dataBreweries.json')
// const locations = require('../dataLocations.json')


// // Brewery.find({})
// //     .then(allBreweries => {
// //         allBreweries.forEach(eachBrewery => {
// //             Location.findOne({"name": eachBrewery.name})
// //                 .then(thatBrewery => {
// //                     eachBrewery.houseref = thatBrewery.name;
// //                     eachBrewery.save();
// //                 })
// //         })
// //     })

//     // function linkLoc(breweries){
//     //     return User.findOne({ username: username })
//     //       .populate('posts').exec((err, posts) => {
//     //         console.log("Populated User " + posts);
//     //       })
//     //   }

//     // breweries.data.forEach(location => {
//     //     locations.forEach(locationTwo => {
//     //         if(location.name === locationTwo.name) {
//     //             console.log(location.name, locationTwo.name)
//     //         }
//     //     })
//     // })

// for (let i = 0; i < breweries.data.length; i++) {
//     for (let j = 0; j < locations.data.length; j++) {
//         if (locations.data[j].brewery.name === breweries.data[i].name) {
//             console.log(locations.data[j].brewery.name)
//             console.log(breweries.data[i].name)
//             Brewery.find({"name": breweries.data[i].name}).then(brewery => 
//                 brewery.forEach(brewery => brewery))
//         }
//     }
// }