const axios = require('axios');
const fs = require('fs');

axios
.get(
 'https://sandbox-api.brewerydb.com/v2/locations/?key=ba145591297f768757f299a230a7773a'
)
.then(response => {
 // handle success
 console.log(response.data);
 let stringified = JSON.stringify(response.data);
 console.log(stringified);
 fs.writeFile('./dataLocations.json', stringified, err => {
   if (err) {
     console.error(err);
   } else {
     console.log("successfully wrote records to db/data.json");
   }
 });
});
