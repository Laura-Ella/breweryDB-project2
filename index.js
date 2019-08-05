const express = require("express");
const parser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(parser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.redirect("/breweries/");
});

app.use("/beer", require("./routes/beer"));
app.use("/brewery", require("./routes/brewery"));
app.use("/location", require("./routes/location"));

app.set("port", process.env.PORT || 8080);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});