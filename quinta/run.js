// https://www.npmjs.com/package/get-pixels
// https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
(function url2pxarr(url){
	return new Promise(function(resolve, reject){
		getPixels(url,function(err,px){
			if(err){
				reject(Error(err));
			}else{
				resolve(px);
			}
		});
	}).then(function(result){
		const pxjson=[];
		for(let i=0; i<result.data.length/4; i++){
			let linha = Math.trunc(i/result.shape[0]);
			let coluna = i%result.shape[0];
			let filename = Math.random().toString().substring(3)+".json";
			pxjson.push({
				i:linha+1,
				j:coluna+1,
				file:filename,
				red:result.data[4*i],
				green:result.data[4*i+1],
				blue:result.data[4*i+2],
				alfa:result.data[4*i+3]
			});
		}
		return pxjson.sort(function(a,b){
			return a.file.localeCompare(b.file)
		});
	});
})("9.png").then(function(result){
	const svg = document.getElementsByTagName("svg")[0];
	result.forEach(function(e){
		c = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
		c.setAttribute("r", 10);
		c.setAttribute("cy", e.i*30-15);
		c.setAttribute("cx", e.j*30-15);
		c.setAttribute("stroke-width",1);
		c.setAttribute("stroke","black");
		c.setAttribute("style", "fill:#"+componentToHex(e.red)+componentToHex(e.green)+componentToHex(e.blue));
		svg.appendChild(c)
	});
});
