const Brewery = require("../models/Brewery")

module.exports = {
  index: function (req, res) {
    Brewery.find({})
      .then(brewery =>
        res.json(brewery)
      )
  },
  show: function (req, res) {
    Brewery.find({ id: req.params.id })
      .then(brewery =>
        res.json(brewery)
      )
  },
  showName: function (req, res) {
    Brewery.find({ name: req.params.name })
      .then(brewery =>
        res.json(brewery)
      )
  },
  create: function (req, res) {
    Brewery.create(req.body)
      .then(brewery =>
        res.json(brewery)
      )
  },
  edit: function (req, res) {
    Brewery.findOneAndUpdate({ _id: req.params.id }, 
      {$set: {"name" : req.body.name} } )
      .then(brewery =>
        res.json(brewery)
      )},
  delete: function (req, res) {
    Brewery.findOneAndDelete({ _id: req.params.id }, req.body)
      .then(brewery =>
        res.json(brewery)
      )
  }
}