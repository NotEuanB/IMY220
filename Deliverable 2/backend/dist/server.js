"use strict";

var express = require('express');

// Create app
var app = express();

// Serve static files from the React app
app.use(express["static"]('./frontend/public'));

// Catch-all route to serve index.html for all pages
app.get('*', function (req, res) {
  res.sendFile('index.html', {
    root: './frontend/public'
  });
});

// Port to listen to
app.listen(3000, function () {
  console.log("Listening on localhost:3000");
});