// requried node modules
var express = require('express')
var exphbs = require('express-handlebars')
var path = require('path')

// Port
var app = express()
var PORT = process.env.PORT || 3000

// access to the public folder
app.use(express.static(path.join(__dirname, '/app/public')))

// handlebars
app.engine('handlebars', exphbs({
  helpers: {
    concatCategory: function (string) {
      return '/blog/category/' + string
    }
  },
  defaultLayout: 'main'
}))

app.set('view engine', 'handlebars')

// routes
require('./app/routing/html-routes.js')(app)

// listener
app.listen(PORT, function () {
  console.log('App is listening on port: ' + PORT)
})
