const express = require('express')

const router = express.Router()

router.use('/', (req, res) => {
  // 沒有登入的情況
  res.render('home')
})

module.exports = router