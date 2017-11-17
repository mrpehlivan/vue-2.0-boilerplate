'use strict'

var path = require('path')
var express = require('express')
var favicon = require('serve-favicon')

var app = new express()
var port = process.env.PORT || 8400

app.use(express.static(path.join(__dirname, 'dist')))
app.use(favicon(path.join(__dirname, 'dist', 'favicon.ico')))

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Authorization,Content-Type');
  res.header('Access-Control-Expose-Headers', '');
  res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.header('Pragma', 'no-cache');
  res.header('Expires', 0);
  next();
});

app.get('/payment', function (req, res) {
  res.json({
    "message" : "Hi i am a get response"
  })
})

app.post('/payment', function (req, res) {

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


