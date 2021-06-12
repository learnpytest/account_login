const express = require('express')
const router = express.Router()
const users = require('../../users.json')
const isRegisteredUser = require('../../modules/isRegisteredUser')
const isPasswordMatched = require('../../modules/isPasswordMatched')


const userArr = users.results

router.get('/', (req, res) => {
  return res.render('index')
})

router.post('/', (req, res) => {
  const userToBeVerified = isRegisteredUser(userArr, req.body.email)
  if (!userToBeVerified) {
    const wrongAccountError = `<div class="alert alert-danger text-center mt-3">Invalid Account Email</div>`
    return res.render('index', { wrongAccountError })
  } else {
    if (!isPasswordMatched(userToBeVerified, req.body.password)) {
      const wrongAccountError = `<div class="alert alert-danger text-center mt-3">Invalid Account Password</div>`
      return res.render('index', { wrongAccountError })
    } else {
      const firstName = userToBeVerified.firstName
      return res.render('welcom', { firstName })
    }
  }
  // if (!isPasswordMatched(userArr, req.body.password)) {
  //   const wrongAccountError = `<div class="alert alert-danger text-center mt-3">Invalid Account Password</div>`
  //   return res.render('index', { wrongAccountError })
  // } else {
  //   return res.render('welcom', { firstName })
  // }

})

module.exports = router