var app = angular.module('myApp', ['elasticsearch'])
/*angular.module.service('client', function(esFactory){
    return esFactory({
        host:'localhost:9200',
        log:'trace'
    })
})*/

app.factory('EleSearch',['$q', 'esFactory', function($q, elasticseatch){
    var client = "localhost:9200"

    var search = function(pl_city, pl_state, term) {
        var query = {
            bool:{
                must:[
                    {match: {text: term}},
                    {match: {State: pl_state}},
                    {match:{City: pl_city}}
                ]
            }

        }
        client.search({
            index:'tweet_search',
            type:'tweet_info',
            body: {query:query}
        }).then(function(result){
            var ii = 0, hits_in, hits_out = [];
            hits_in = (result.hits||{}).hits||[];
            for (; ii < hits_in.length;ii++) {
                hits_out.push(hits_in[ii]._source);
            }
        })
    }


}])