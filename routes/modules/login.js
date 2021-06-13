const express = require('express')
const router = express.Router()

const users = require('../../users.json')
const isRegisteredUser = require('../../modules/isRegisteredUser')
const isPasswordMatched = require('../../modules/isPasswordMatched')
const User = require('../../models/user')
const userArr = users.results

router.get('/', (req, res) => {
  return res.render('index')
})

router.post('/', (req, res) => {
  User.find().lean().then(users => {
    const userRegistered = isRegisteredUser(users, req.body.email)
    if (!userRegistered) {
      const wrongAccountError = `<div class="alert alert-danger text-center mt-3">Invalid Account Email</div>`
      return res.render('index', { wrongAccountError })
    }

    if (!isPasswordMatched(userRegistered, req.body.password)) {
      const wrongAccountError = `<div class="alert alert-danger text-center mt-3">Invalid Account Password</div>`
      return res.render('index', { wrongAccountError })
    }
    req.session.user = userRegistered
    return res.redirect('/welcome')
  });
})

module.exports = router