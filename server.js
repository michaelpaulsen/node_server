const http = require('http');
const fs   = require('fs');
const mime = require('mime-types');

const hostname = '127.0.0.1';
const port = 3000;
const e = {
	DocRoot = null;
	favICO = false;
	isProd = false;
}	/** 
DocRoot: the file to use as the 'root' file (if on a server set to '.')
favICO: weather to give a 404 error if there is no favicon present (true on ; false off)
isProd : set to true if you whant the server to automaticly reqest a CDN version of Jquery should always be true for production sites
*/ 

const server = http.createServer((req, res) => {
	if(e.DocRoot == null){
		console.log("you must set the e.DocRoot befor this server will work");
		res.writeHead(403);
		return;
		/** give an error if the docroot envorment var is not set*/
	}
			return;
		/** give an error if the e.DocRoot envorment var is not set*/
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
	console.log( url.split('/')[url.split('/').length-1])
	fs.readFile(e.DocRoot + url, function(err, data) {
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