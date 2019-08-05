const Beer = require("../models/beer")

module.exports = {
  index: function (req, res) {
    Beer.find({})
      .then(beer =>
        res.json(beer)
      )
  },
  show: function (req, res) {
    Beer.find({ name: req.params.name })
      .then(beer =>
        res.json(beer)
      )
  },
  create: function (req, res) {
    Beer.create(req.body)
      .then(beer =>
        res.json(beer)
      )
  },
  edit: function (req, res) {
    Beer.findOneAndUpdate({ _id: req.params.id }, 
      {$set: {name : req.body.name} } )
      .then(beer =>
        res.json(beer)
      )},
  delete: function (req, res) {
    Beer.findOneAndDelete({ _id: req.params.id }, req.body)
      .then(beer =>
        res.json(beer)
      )
  }
}