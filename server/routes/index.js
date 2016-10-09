var express = require('express');
var router = express.Router();
var search = require('./search');
var client = require('./connect.js');
var esService = require('./search.js');
var Q = require('q');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index.ejs', { title: 'Twitter Search' });
});

router.get('/search', function(req, res, next) {
    var text = req.query['query'];
    var city = req.query['location'];
    console.log("search term: " + text + " " + city);
    Q(esService.performSearch(text, city)).then(function(data){
        res.send(data);
    })
});
//router.get('/search', function(req, res, next) {
//  res.send('Bittiger test page');
//});


module.exports = router;
