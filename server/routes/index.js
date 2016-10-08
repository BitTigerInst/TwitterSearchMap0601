var express = require('express');
var router = express.Router();
var search = require('./search');
var client = require('./connect.js');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index.ejs', { title: 'Twitter Search' });
});

router.get('/search', function(req, res, next) {
    var search = function(req, res) {
        client.search({
            index: 'tweet_search',
            type: 'tweet_info',
            body: {
                query: {
                    bool:{
                        must:[
                            {match: {text: req.query['query']}},
                            {match: {City: req.query['location']}}
                        ]
                    }
                }
            }
        }, function(error,response) {
            if (error) {
                console.log("search error:" + error)
            } else {
                console.log("=====print response=====");
                res.send(response.hits.hits);
            }

        });
    }

    //res.send("just test");
    //search_res.forEach(function(hits){
    //    console.log(hits)});

});
//router.get('/search', function(req, res, next) {
//  res.send('Bittiger test page');
//});


module.exports = router;
