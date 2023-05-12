var http = require('http');
var fs = require('fs');

var port = 8080;
var ip = '192.168.0.149';

var server = http.createServer(function(request, responce){ // request has the information about the request made by the client, resoponse is the responce which we send back to the client
    responce.writeHead(200, {'Content-Type': 'text/plain'});
    if (request.url === '/home' || responce === '/'){
        responce.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(responce);
    }
    else if (request.url === '/contact'){
        responce.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/contact.html', 'utf8').pipe(responce);
    }
    else if (request.url === '/profile'){
        var person = {
            name: 'Elon Musk',
            height: '6"2 ft',
            education: 'Stanford',
            age: 22
        };
        responce.writeHead(200, {'Content-Type': 'application/json'});
        responce.end(JSON.stringify(person));
    }
    else{
        responce.writeHead(200, {'Content-Type': 'text/plain'});
        responce.end('404, page not found!')
    }
    
    
}).listen(port, ip);

console.log('listening at port 8080');
