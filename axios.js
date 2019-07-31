const axios = require('axios');
const fs = require('fs');

axios
.get(
 'https://sandbox-api.brewerydb.com/v2/breweries/?key=ba145591297f768757f299a230a7773a'
)
.then(response => {
 // handle success
 console.log(response.data);
 let stringified = JSON.stringify(response.data);
 console.log(stringified);
 fs.writeFile('./dataBreweries.json', stringified, err => {
   if (err) {
     console.error(err);
   } else {
     console.log("successfully wrote records to db/data.json");
   }
 });
});




// const axios = require('axios')
// const fs = require('fs')

// const url = "https://sandbox-api.brewerydb.com/v2/beers/?key=ba145591297f768757f299a230a7773a"
// let json
// axios.get(url)
//     .then(response => { json = response.data })
//     .then(x => console.log(json))
//     .then()

// axios
//   .get('https://api.coindesk.com/v1/bpi/currentprice')
//   .then(response => (this.info = response.data.bpi))

