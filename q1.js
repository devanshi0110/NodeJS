let http= require('http');
var url = require('url');
var fs = require('fs');
var querystring = require('querystring');
var server = http.createServer(function(req,res){
    if(req.url == "/index.html" && req.method === 'GET'){
        var filename = "./q1.html";
        fs.readFile(filename, function(err,data){
            if(err){
                res.writeHead(404,{'Content-type' : 'text/html'});
                return res.end("404 Not Found");
            }
            else{
                res.writeHead(200,{'content-type' : 'text/html'});
                res.write(data);
                return res.end();
            }
        });

    }else if(req.url == "/process" && req.method === 'POST'){
         let body ='';               
                    req.on('data',chunk =>{
                        body += chunk.toString();
                    });
                    req.on('end',() =>{
                        const parsedData = querystring.parse(body);
                        console.log(parsedData);
                        const f = parsedData.fname || '';
                        const l = parsedData.lname || '';
                        res.end("Hello " + f + "  " + l);
                    });   
    }
    else{
        res.end("<h1>Other Pages</h1>");
    }
});
server.listen(1616);
console.log('Listing on 1616');
