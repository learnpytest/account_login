const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  // 沒有登入的情況
  res.render('welcome')
})

module.exports = router