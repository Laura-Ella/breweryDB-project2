const express = require("express")
const app = express()

app.get("/", (request, response) => {
    response.send("Hello World");
});

app.listen(4000, () => {
    console.log("listening on 4000")
})