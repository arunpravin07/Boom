														
														    var http = require('http');
															var fs = require('fs');
															const hostname = '127.0.0.1';
															const port = 4000;
/*var cluster=require('cluster');

   if (cluster.isMaster) {
  // Count the machine's CPUs
  var cpuCount = require('os').cpus().length;

  // Create a worker for each CPU
  for (var i = 0; i < cpuCount; i += 1) {
    cluster.fork();
}
}
  else
  {*/

														http.createServer(function (req, res) {
															
														 fs.readFile('arun2.html', function(err, data) {
															res.writeHead(200, {'Content-Type': 'text/html'});
															res.write(data);
															return res.end();

														});

														}).listen(port, hostname, () => {
														  console.log(`Server running at http://${hostname}:${port}/`);
														});


  //}