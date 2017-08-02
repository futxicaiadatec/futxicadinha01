var pxFileList;
var ajax = new XMLHttpRequest();
ajax.open("GET","filelist.json",true);
ajax.addEventListener("load", function(e){
	pxFileList=JSON.parse(e.target.response);
});
ajax.send();
/*
hexString = yourNumber.toString(16);
yourNumber = parseInt(hexString, 16);

var pixels;
getPixels("chrome.png",function(err,px){
	pixels = px;
});

var pxjson = []
for(let i=0; i<pixels.data.length/4; i++){
	let s = pixels.data[i]+pixels.data[i+1]+pixels.data[i+2]+pixels.data[i+3];
	  let linha = Math.trunc(i/pixels.shape[0]);
      let coluna = i%pixels.shape[0];
      let filename = Math.random().toString().substring(3)+".json";
      pxjson.push({
        i:linha,
        j:coluna,
        file:filename,
		red:pixels.data[i],
		green:pixels.data[i+1],
		blue:pixels.data[i+2],
		alfa:pixels.data[i+3]
      });
}

var filelist= pxjson.map(
	({file})=>({filename:file})
);

pxjson.forEach(function(e){
  const ajax = new XMLHttpRequest();
  ajax.open("PUT",e.file,true);
  ajax.send(JSON.stringify(e,null,4));
});

var a = document.createElement("a");
document.body.appendChild(a);
a.style = "display: none";
blob = new Blob([JSON.stringify( _VAR_ ,null,4)], {type: "text/plain"});
url = window.URL.createObjectURL(blob);
a.href = url;
a.download = "_VAR_.json";
a.click();
window.URL.revokeObjectURL(url);

pxjson.sort(function(a,b){
	return a.file.localeCompare(b.file)
});

*/
