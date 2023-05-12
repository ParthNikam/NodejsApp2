var http = require('http');
var fs = require('fs');

var port = 8080;
var ip = '192.168.0.149';

var server = http.createServer(function(request, responce){ // request has the information about the request made by the client, resoponse is the responce which we send back to the client
    responce.writeHead(200, {'Content-Type': 'application/json'});
    var person = {
        name: 'Elon Musk',
        height: '6"2 ft',
        education: 'Stanford',
        age: 22
    };
    responce.end(JSON.stringify(person));
}).listen(port, ip);

console.log('listening at port 8080');