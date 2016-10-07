/**
 * Created by myr on 10/6/16.
 */
var client = require('./connect.js');
client.search({
    index: 'tweet_search',
    type: 'tweet_info',
    body: {
        query: {
            bool:{
                must:[
                    {match: {text: "sweet"}},
                    {match: {State: "TX"}}
                ]
            }
        }
    }
}, function(error, response, status) {
        if (error) {
            console.log("search error:" + error)
        }
        else {
            console.log("----response ---");
            console.log(response);
            console.log("--Hits----");
            response.hits.hits.forEach(function(hit){
                console.log(hit);
            })
    }
});
console.log("haha");