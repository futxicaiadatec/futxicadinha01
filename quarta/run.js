document.getElementById("p4").onclick = function(){
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function(e){
        if (this.readyState == 4 && this.status == 200){
            const p4 = document.getElementById("p4");
            p4.innerText = JSON.parse(e.target.responseText).p4;
            p4.onclick = null;
        }
    };
    ajax.open("GET", "lorem.json", true);
    ajax.send();
};
