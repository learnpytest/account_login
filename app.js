const express = require('express')
const exphbs = require('express-handlebars')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const morgan = require('morgan')
const methodOverride = require('method-override')

const routes = require('./routes')
require('./config/mongoose')

const app = express()
const PORT = 3000

const SSESSION_ID = 'sid'

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(morgan("dev"))
app.use(express.urlencoded({ extended: true }))
app.use(session({ key: SSESSION_ID, secret: 'my secret food', resave: false, saveUninitialized: false, cookie: { expires: 100000 } }))
app.use(cookieParser())
app.use(methodOverride('_method'))

app.use(routes)

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})