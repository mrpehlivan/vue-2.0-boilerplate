'use strict'

var path = require('path')
var express = require('express')
var favicon = require('serve-favicon')

var app = new express()
var port = process.env.PORT || 8400

app.use(express.static(path.join(__dirname, 'dist')))
app.use(favicon(path.join(__dirname, 'dist', 'favicon.ico')))

app.get('/test-url', function (req, res) {
  res.json({
    "message" : "Hi i am a get response"
  })
})

app.post('/test-url', function (req, res) {

  res.json({
    "message" : "Hi i am a post response"
  })
})



app.listen(port, function(err) {
  if (err) {
    console.error(err)
  } else {
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port)
  }
})


