const express = require('express')

const router = express.Router()

const login = require('./modules/login')
const welcome = require('./modules/welcome')
const logout = require('./modules/logout')
const home = require('./modules/home')

const loginCheckerRedirectLogin = (req, res, next) => {
  if (req.session.user && req.cookies) {
    next()
  } else {
    res.redirect('/login')
  }
}

const loginCheckerRedirectHome = (req, res, next) => {
  if (req.session.user && req.cookies) {
    res.redirect('/home')
  } else {
    next()
  }
}

const loginCheckerRedirectWelcome = (req, res, next) => {
  if (req.session.user && req.cookies) {
    res.redirect('/welcome')
  } else {
    next()
  }
}

router.use((req, res, next) => {
  if (req.session.user && req.cookies) {
    res.locals.userFirstName = req.session.user.firstName
  }
  next()
})

router.use('/login', loginCheckerRedirectWelcome, login)
router.use('/logout', loginCheckerRedirectLogin, logout)
router.use('/welcome', loginCheckerRedirectLogin, welcome)
router.use('/home', loginCheckerRedirectLogin, home)
router.use('/', loginCheckerRedirectHome, (req, res) => {
  // 沒有登入的情況
  res.redirect('/login')
})

module.exports = router