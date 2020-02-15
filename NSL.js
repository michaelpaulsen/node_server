function echo(str){ 
	return str;
}
function htmlSpecialChars(d){
	d = d.toString();
	var temp = ' ';
	for(let x = 0; x < d.length; x++){
		switch(d[x]){
			case "&":{ 
				temp += "&amp;";
				break;
			}
			case "<" :{ 
				temp += "&lt;";
				break;
			}
			case ">" :{ 
				temp += "&gt;";
				break;
			}
			default:{
				temp += d[x];
			}
		}
	}
}		
this.htmlSpecialChars = function(d){
	d = d.toString();
	var temp = ' ';
	for(let x = 0; x < d.length; x++){
		switch(d[x]){
			case "&":{ 
				temp += "&amp;";
				break;
			}
			case "<" :{ 
				temp += "&lt;";
				break;
			}
			case ">" :{ 
				temp += "&gt;";
				break;
			}
			default:{
				temp += d[x];
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
				val += d[x];
				if(d[x] == ">") {isNodeTag = false; break;}
				x++;
			}
			val = val.slice(5,val.length-1).split(";");
			for(i = 0; i<val.length;i++){
				if(val[i].split("(")[0].trim() == "echo"){
					d+=eval(val[i]);
				}else{
					eval(val[i]);
				}
			}
		}else {
			str+=d[x];
		}
	}	
	return(str);
}