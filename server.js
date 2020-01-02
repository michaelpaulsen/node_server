const http = require('http');
const fs   = require('fs');
const mime = require('mime-types');
const PHP = require('./PHP.js');

const hostname = '127.0.0.1';
const port = 3000;
var e;
fs.readFile( 'envorment.json',	(err, data) => {
	if(err){
		console.log("somthing whent wrong");
		return;
	}
		e = JSON.parse(data);
});

const server = http.createServer((req, res) => {
	if(e.DocRoot == null){
		console.log("you must set the e.DocRoot befor this server will work");
		res.writeHead(403);
		return;
		/** give an error if the docroot envorment var is not set*/
	}
	
	if( req.url == '/favicon.ico' && !e.favICO){
		res.writeHead(200);
		res.end();
		return;
	}
	
	var url = req.url;
	if( url == "/"){
		url = '/index.html';
	}
	
	fs.readFile(e.DocRoot + url, function(err, data) {
		if(err){
			res.writeHead(404);
			res.end();
			return;
		}
		/** if file not found then */
		var extention = url.split('.')[1]; 
		if( url.split('.')[1] == "php" || url.split('.')[1] == "PHP"){ 
			var tags = getTags(data);
			console.log({tags:tags});
			extention = 'html'; 
		}
		
		res.writeHead(200, {
			'Content-Type': mime.lookup(extention)
			});
		res.write(data);
		res.end();
	});	
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});