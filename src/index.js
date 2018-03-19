const electron = require("electron");
const path = require('path');
const BrowserWindow = electron.remote.BrowserWindow;

const notifybtn = document.getElementById("notifyBTN");

notifybtn.addEventListener("click",function (event) {
    const modalPath = path.join("file://", __dirname, "add.html");
    let win = new BrowserWindow({frame: false,width:800,height:600});
    win.webContents.openDevTools();
    win.loadURL(modalPath);
    win.show();
    win.on("close",function () {
        win =null;
    })
})