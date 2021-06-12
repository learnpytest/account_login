const express = require('express')
const router = express.Router()
const login = require('./modules/login')
router.use('/login', login)
router.use('/', (req, res) => {
  // 沒有登入的情況
  res.redirect('/login')
})

module.exports = router