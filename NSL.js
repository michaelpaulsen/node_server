var htmlSpecialChars(d){
	d = d.toString();
	var temp = ' ';
	for(let x = 0; x < d.length; x++){
		switch(d[x]){
			case "&" { 
				temp += "&amp;";
				break;
			}
			case "<" { 
				temp += "&lt;";
				break;
			}
			case ">" { 
				temp += "&gt;";
				break;
			}
		}
	}
}
this.htmlSpecialChars(d){
	d = d.toString();
	var temp = ' ';
	for(let x = 0; x < d.length; x++){
		switch(d[x]){
			case "&" { 
				temp += "&amp;";
				break;
			}
			case "<" { 
				temp += "&lt;";
				break;
			}
			case ">" { 
				temp += "&gt;";
				break;
			}
		}
	}
}
 var getTags = function(d /** string */){
	var tags = [];
	if(typeof(d) == "object"){
		d = d.toString();
	}
	for(var x = 0;x < d.length; x++){
		var str = "";
		var y = 0; 
		if(d[x] == "<" && d[x+1] != "/"){
		
			while(d[x+y] != ">" && x+y < d.length){
				str += d[x+y];
				y++;
			}
			str +=">";
			x += (y+1);
		}
		if(str){
			tags.push(str);
		}
	}
	return tags; 
}

this.interpert = function(d){
	var d = d.toString()
	var i, x, y;
	var str = '';
	var ntag = '<node ';
	var usesNode = false;
	var isNodeTag;
	console.log({"d":d,"d2":d[d.length-1]})
	for(x = 0; x < d.length; x++){
		if(d[x] == "<" ){	
			var tag = d.slice(x,x+6);
			if(tag == ntag){
				isNodeTag = true;
			}else{
				isNodeTag = !true;
			}
		}
		if(isNodeTag){
			var val = '';
			while( isNodeTag && x < d.length){
				if(d[x] == ">") {isNodeTag = false;}
				val += d[x];
				x++;
			}
			console.log({'x':x,val:val.slice(5,val.length-1)});
			val = val.slice(5,val.length-1);
			eval(val);
		}else {
			str+=d[x];
		}
	}	
	return(str);
}