const express = require('express')

const router = express.Router()

const SSESSION_ID = 'sid'

router.get('/', (req, res) => {
  req.session.destroy(function (err) {
    // cannot access session here
    if (err) {
      return res.redirect('/')
    } else {
      res.clearCookie(SSESSION_ID)
      return res.redirect('/login')
    }
  })
})

module.exports = router