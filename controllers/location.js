const Location = require("../models/location")

module.exports = {
  index: function (req, res) {
    Location.find({})
      .then(location =>
        res.json(location)
      )
  },
  show: function (req, res) {
    Location.find({ name: req.body.name })
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
      { $set: { name: req.body.name } })
      .then(location =>
        res.json(location)
      )
  },
  delete: function (req, res) {
    Location.findOneAndDelete({ _id: req.params.id }, req.body)
      .then(location =>
        res.json(location)
      )
  }
}