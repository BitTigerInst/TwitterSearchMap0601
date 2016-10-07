/**
 * Created by myr on 10/6/16.
 */


var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
    hosts: 'localhost:9200',
    log:'trace'
})
client.ping({
    requestTimeout: 30000,

    // undocumented params are appended to the query string
    hello: "elasticsearch"
}, function (error) {
    if (error) {
        console.error('elasticsearch cluster is down!');
    } else {
        console.log('All is well');
    }
});

app.get('/', function (req, res) {
    res.send('Hello World!');
});

var server = app.listen(8000, function() {
    var port = server.address().port;
    console.log("App now running on port", port);
})
module.exports = client;