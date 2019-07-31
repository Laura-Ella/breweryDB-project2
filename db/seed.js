const shows = require('./shows.json')
const people = require('./people.json')
console.log(people)

const Person = require('./models/Person')
const Show = require('./models/Show')

Person.deleteMany({}).then(Person.create(people))
Show.deleteMany({}).then(Show.create(shows))


