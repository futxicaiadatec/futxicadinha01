let hue = 120;

document.getElementById("colorboard").style.backgroundColor = "blue";

function roda(){
  hue = (hue+20)%360;
  document.getElementById("colorboard").style.backgroundColor = `hsl(${hue},100%,50%)`;
  setTimeout( roda, document.getElementById("dt").value);
}
roda();