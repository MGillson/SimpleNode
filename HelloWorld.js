console.log("Hello World - First Line");

var port = Number(process.env.PORT || 5000);
var ip = process.env.IP || '0.0.0.0';
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World at - ' + ip + ':' + port);
}).listen(port,ip);

console.log('Server running at - ' + ip + ':' + port);
