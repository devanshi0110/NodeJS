const http= require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer(function(req,res){
    if(req.url == "/gethello"){
        var filename = "./q2.html";
        fs.readFile(filename,function(err,data){
            if(err){
                res.end("<h2>404 Not Found..</h2>");
            }
                res.writeHead(200,{'Content-type' : 'text/html'});
                res.write(data);
                return res.end();
        });
    }else{
        res.end("<h1>Other Pages</h1>");
    }
});
server.listen(2626);
console.log("Listening on port 2626");