/**
 * Created by myr on 10/8/16.
 */
ElasticSearchClient = require('elasticsearchclient');
var Q  = require('q');
var index = "tweet_search";
var type = "tweet_info";
var serverOptions = {
    host:'localhost',
    port:9200
};
var elasticSearchClient = new ElasticSearchClient(serverOptions);
function performSearch(text, location) {
    var deferred = Q.defer();
    console.log("Request handler 'search' was called.");
    var queryObj = {
        query:{
            bool:{
                must:[
                    {match: {text: text}},
                    {match: {City: location}}
                ]
            }
        }
    }
    elasticSearchClient.search(index, type, queryObj)
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
exports.performSearch = performSearch;


