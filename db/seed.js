const dataBeers = require('./dataBeers.json')
const dataBreweries = require('./dataBreweries.json')
const dataLocations = require('./dataLocations.json')

console.log(people)

const Person = require('./models/Person')
const Show = require('./models/Show')
const Show = require('./models/Show')


Person.deleteMany({}).then(Person.create(people))
Show.deleteMany({}).then(Show.create(shows))


