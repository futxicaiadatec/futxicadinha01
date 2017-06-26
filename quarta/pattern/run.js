document.getElementById("dial").onchange = function(e){
    const value = e.target.value;
    const frame = document.getElementById("frame");
    frame.setAttribute("x",value);
    frame.setAttribute("y",value);
};
