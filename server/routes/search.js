/**
 * Created by myr on 10/8/16.
 */
var client = require('./connect.js');
var Q  = require('q');
var index = tweet_search;
var type = tweet_info;
function search(text, location) {
    var deferred = Q.defer();
    console.log("Request handler 'search' was called.");
    var queryQbj = {
        query:{
            bool:{
                must:[
                    {match: {text: text}},
                    {match: {City: location}}
                ]
            }
        }
    }
    client.search(index, type, queryObj)
        .on('data', function(data){
            deferred.resolve(JSON.parse(data));
        })
        .on('error', function(err){
            console.log(err);
            return deferred.resolve(err);
        })
        .exec();
    return deferred.promise;

}
exports.search = search;

