var http = require('http');
var fs = require('fs');

var port = 8080;
var ip = '192.168.0.149';

var server = http.createServer(function(request, responce){ // request has the information about the request made by the client, resoponse is the responce which we send back to the client
    responce.writeHead(200, {'Content-Type': 'text/html'});
    var read_stream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    read_stream.pipe(responce);
    
}).listen(port, ip);

console.log('listening at port 8080');


/*
var read_stream = fs.createReadStream(__dirname + '/readme.txt');
var write_stream = fs.createWriteStream(__dirname + '/writeme.txt')

// pipe reads and writes buffers automatically
read_stream.pipe(write_stream);
*/
