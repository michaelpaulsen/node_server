
getTags = function(d /** string */){
	var tags = [];
	if(typeof(d) == "object"){
		d = d.toString();
	}
	for(var x = 0;x < d.length; x++){
		var str;
		if(d[x] == "<" && d[x+1] != "/"){
			str = "<";
			var y = 1; 
			while(d[x+y] != ">" && x+y < d.length){
				str += d[x+y];
				y++;
			}
			str +=">";
			x += y;
		}
		tags.push(str);
	}
	return tags; 
}