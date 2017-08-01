var pixels;
// Generate Table Screen Html
function gtsh(w,h,childStr){
  let tableStr = "<table><tbody>";
  for(let i=0; i<h; i++){
    tableStr += "<tr>";
    for(let j=0; j<w; j++){
      tableStr += "<td class=\"i-"+i+" j-"+j+"\">";
      tableStr += childStr;
      tableStr += "</td>"
    }
    tableStr += "</tr>";
  }
  tableStr += "</table></tbody>"
  return tableStr;
}
// hexString = yourNumber.toString(16);
// yourNumber = parseInt(hexString, 16);
// document.getElementById("screen").innerHTML = gtsh(64,64,"<div class=\"pixel red\"></div><div class=\"pixel green\"></div><div class=\"pixel blue\"></div>");
/*
getPixels("capivara.png",function(err,px){
	pixels = px;
});
var pxjson = []
for(let i=0; i<pixels.data.length/4; i++){
	let s = pixels.data[i]+pixels.data[i+1]+pixels.data[i+2]+pixels.data[i+3];
    if(s > 600){
		  let linha = Math.trunc(i/pixels.shape[0]);
      let coluna = i%pixels.shape[0];
      let filename = Math.random().toString().substring(3)+".json";
      pxjson.push({
        i:linha,
        j:coluna,
        r:random
      });
	}
}
*/
