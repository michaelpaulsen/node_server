const http = require('http');
const fs   = require('fs');
const mime = require('mime-types');

const hostname = '127.0.0.1';
const port = 3000;
const DocRoot = null;
const favICO = false;

const server = http.createServer((req, res) => {
	if(DocRoot == null){
		console.log("you must set the docroot befor this server will work");
		res.writeHead(403);
		return;
		/** give an error if the docroot envorment var is not set*/
	}
	if( url == "/"){
		url = '/index.html';
	}
	if( req.url == '/favicon.ico' && !favICO){
		res.writeHead(200);
		res.end();
		return;
	}
	var url = req.url;
	
	fs.readFile(DocRoot + url, function(err, data) {
		console.log();
		if(err){
			res.writeHead(404);
			res.end();
			return;
		}
		res.writeHead(200, {
			'Content-Type': mime.lookup(url.split('.')[1])
			});
		res.write(data);
		res.end();
	});	
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});