const electron = require('electron');
const path = require("path");
const remote = electron.remote;
const close = document.getElementById("close");
const sql = document.getElementById("sql");

sql.addEventListener("click",function () {
    fetch("http://localhost:3000", {mode: 'cors',method: "GET"}).then((res)=>{
        console.log(res);
        return res.json();
    }).then((res)=>{
        console.log(res)
        for(x in res){
            console.log(x);
            console.log(res[x])
        }
        close.innerHTML = res;
    })
});


close.addEventListener("click", function (event) {
    var win = remote.getCurrentWindow();
    win.close();
});


