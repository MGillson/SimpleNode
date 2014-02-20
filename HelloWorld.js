console.log("Hello World - First Line");

// set port, ip from command 
// $ export PORT=3333
// $ export IP=127.0.0.1
// $ node app.js 
// $ NODE_ENV=production node app.js
// Hope null ip becomes localhost
var port = Number(process.env.PORT || 5000);
var ip = process.env.IP || '127.0.0.1';
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World ' + ip + ':' + port);
}).listen(port,ip);

console.log('Server running at - ' + ip + ':' + port);
