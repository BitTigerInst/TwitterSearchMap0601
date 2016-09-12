var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Twitter Search' });
});

//router.get('/search', function(req, res, next) {
//  res.send('Bittiger test page');
//});

module.exports = router;
