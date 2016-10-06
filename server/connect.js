/**
 * Created by myr on 10/6/16.
 */
var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
    hosts: 'localhost:9200',
    log:'trace'
})

module.exports = client;