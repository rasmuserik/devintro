#!/usr/bin/env node

var http = require("http"), url = require("url"), path = require("path"), fs = require("fs");

contentType = {
    'html': 'text/html',
    'js': 'text/javascript'
}

http.createServer(function(request, response) {
    var urlname = url.parse(request.url).pathname;
    var filename = path.join(process.cwd(),urlname);
    if(urlname.charAt(urlname.length -1) !== '/') urlname += '/';
    try {
    if (fs.statSync(filename).isDirectory()) {fs.readdir(filename, function(err, dir) { if(!err) {
      dir.push('..');
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write("<html><body><ul>"+dir.map(function(x) { return '<li><a href="'+ urlname + x+'">'+x+'</a></li>'}).join("") + '</ul></body>' , 'binary');
      response.end();
    }})} else fs.readFile(filename, "binary", function(err, file) { if(file) {
      var ext = filename.substr(filename.lastIndexOf('.')+1);
      response.writeHead(200, {"Content-Type": contentType[ext] || "text/plain"});
      response.write(file, "binary");
      response.end();
    }});
    } catch(e) {
      response.end();
    }
}).listen(1234, "localhost");

console.log("Server running on http://localhost:1234/");
