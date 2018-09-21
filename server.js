var http=require('http');
var server=http.createServer(function (request, response) { 
                response.writeHead(200,{"Content-Type":"text/html"});
                response.write("<html><body><h1>Hello!</h1></body></html>"); 
                response.end();
            }
        ); 
server.listen("travelitious.us-3.evennode.com"); 
console.log("Server Started.");