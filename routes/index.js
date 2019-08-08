var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/Home', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.get('/Paris', function(req, res, next) {
  res.render('Paris', { title: 'Paris' });
});

router.get('/Amsterdam', function(req, res, next) {
  res.render('Amsterdam', { title: 'Amsterdam' });
});

router.get('/Berlin', function(req, res, next) {
  res.render('Berlin', { title: 'Berlin' });
});

router.get('/', function(req, res, next) {
  res.render('index', { h5: 'The place to find all the best places to stay' });
});

module.exports = router;
