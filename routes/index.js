var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index.pug');
});

router.get('/home', function (req, res, next) {
  res.render('index.pug');
});

router.get('/about', function (req, res, next) {
  res.render('about.pug');
});


module.exports = router;
