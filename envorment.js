const fs = require('fs');
this.e;
fs.readFile( 'envorment.json',	(err, data) => {
	if(err){
		console.log("somthing whent wrong");
		return;
	}
	e = JSON.parse(data);
});
	

this.parseGet = function(qs){
	qs = qs.split("&");
	var obj = { }
	for(var i = 0; i<qs.length;i++){
		var nqs = qs[i].split("=");
		nqs[0] = decodeURIComponent(nqs[0]);
		nqs[1] = decodeURIComponent(nqs[1]);
		obj[nqs[0]] = nqs[1];
	}
	e.__GET__ = obj;
}
this.pushGet = function(){}