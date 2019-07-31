const Location = require("../models/Location")

module.exports = {
  index: function (req, res) {
    Location.find({})
      .then(location =>
        res.json(location)
      )
  },
  show: function (req, res) {
    Location.find({ id: req.params.id })
      .then(location =>
        res.json(location)
      )
  },
  showName: function (req, res) {
    Location.find({ name: req.params.name })
      .then(location =>
        res.json(location)
      )
  },
  create: function (req, res) {
    Location.create(req.body)
      .then(location =>
        res.json(location)
      )
  },
  edit: function (req, res) {
    Location.findOneAndUpdate({ _id: req.params.id }, 
      {$set: {"name" : req.body.name} } )
      .then(location =>
        res.json(location)
      )},
  delete: function (req, res) {
    Location.findOneAndDelete({ _id: req.params.id }, req.body)
      .then(location =>
        res.json(location)
      )
  }
}