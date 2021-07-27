var http = require('http');
var fs = require('fs');
const hostname = '127.0.0.1';

require('dotenv').config()

const port = process.env.PORT ;
    const mode   = process.env.NODE_ENV || 'hello moto';

http.createServer(function (req, res) {
																const Logger = require('node-json-logger');
																const logger = new Logger({ timezone : 'Asia/Kolkata' , loggername : 'kaboom' });
																logger.info('thakida thakida');
																console.log(mode);
 fs.readFile('arun1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
});

}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
