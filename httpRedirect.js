const express = require('express');

var http = express();

http.get('*', (req, res) => {
    res.redirect('https://' + req.headers.host + req.url);
});

module.exports = http;