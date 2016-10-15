var express = require('express');
app = express();
var router = express.Router();
var search = require('./search');
var esService = require('./search.js');
var Q = require('q');

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index.ejs', { title: 'Twitter Search' });
});

router.get('/submit', function(req, res) {
    console.log("------------------");
    //console.log(req);
    console.log(req.query);
    var text = req.query['text'];
    var city = req.query['city'];
    console.log("search term: " + text + " " + city);
    Q(esService.performSearch(text, city)).then(function(data){
        res.json(data);
    })
});
//router.get('/search', function(req, res, next) {
//  res.send('Bittiger test page');
//});
//app.use('/', router);


module.exports = router;
