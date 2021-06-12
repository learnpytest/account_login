const User = require('../user')
const db = require('../../config/mongoose')
const userRawData = require('../../users.json')
db.once('open', () => {
  User.insertMany(userRawData.results, (err) => {
    if (err) return console.log('insert documents error')
  })
  console.log('monoose connected!')
  return console.log('insert documents done!')
})