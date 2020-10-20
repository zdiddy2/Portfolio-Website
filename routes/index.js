const { exec } = require('child_process');
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();

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

router.get('portfolio', function(req, res, next) {
  res.render('about.pug');
});

router.post('/payload', jsonParser, function (req, res, next) {
  console.log(req.body.sender.login + ' just pushed to ' + req.body.repository.name);

  console.log('pulling code from GitHub...');

  exec('git -C /var/www/portfolio reset --hard', execCallBack);
      
  exec('git -C /var/www/portfolio clean -df', execCallBack);

  exec('&& git -C /var/www/portfolio pull', execCallBack);

  exec('&& npm -C /var/www/portfolio install --production', execCallBack);

  res.sendStatus(200);
  res.end();
});

function execCallBack(err, stdout, stderr) {
  if (stdout) console.log(stdout);
  if (stderr) console.log(stderr);
}


module.exports = router;
