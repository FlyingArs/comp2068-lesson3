// hello world in the browser
var http = require('http');

// create and load our own http server with node
http.createServer(function(req, res) {
    
    // send an ok response to the browser header
    res.writeHead(200, { 'Content-Type': 'text-plain' });

    // display text on the page
    res.write('Hello world, running on port 3000');

    // log to the console
    console.log('Hello world');

    // end the response
    res.end();

}).listen(3000);

// site will load at http://localhost:3000
console.log('Site is now running at http://localhost:3000');