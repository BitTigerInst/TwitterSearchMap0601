/**
 * Created by myr on 10/2/16.
 */
var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text-plain'});
    res.end('hello world!\n');
}).listen(1337,'127.0.0.1');
console.log('server running at 127.0.0.1');