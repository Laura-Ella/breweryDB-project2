const express = require("express")
const parser = require('body-parser')
const app = express()

app.use(parser.json())

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/beer", require("./routes/beer"))
app.use("/brewery", require("./routes/brewery"))
app.use("/location", require("./routes/location"))


app.listen(4000, () => {
    console.log("listening on 4000")
})

// https://sandbox-api.brewerydb.com/v2/beers/?key=ba145591297f768757f299a230a7773a
// https://sandbox-api.brewerydb.com/v2/breweries/?key=ba145591297f768757f299a230a7773a
