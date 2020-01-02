interperter(d /** string */){
	for(var x==0;x<d.length;x++){
		var tags = []
		if(d[x] == "<" && d[x+1] != "/"){
			str = "<";
			var y = 1; 
			while(d[x+y] != ">" && x+y < d.length){
				str += d[x+y];
				y++;
			}
			x += y;
			tags.push(str)
		}
	}
	return tags(); 
}