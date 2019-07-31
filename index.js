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