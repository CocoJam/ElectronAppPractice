const {app, BrowserWindow, Menu} = require('electron');
const url = require('url');
const path = require('path');
const shell = require('electron').shell;


let win = null;
console.log(app);

function createWindow() {
    win = new BrowserWindow({width: 800, height: 600});
    win.loadURL(url.format({
        pathname: path.join(__dirname, "src", 'index.html'),
        protocol: 'file:',
        slashes: true
    }));
    // win.WebContents.openDevTools();
    win.on("close", () => {
        win = null;
    });
    var menu = Menu.buildFromTemplate([{
        label: 'menu', submenu: [{
            label: "Go To google", click() {
                shell.openExternal("http://google.com");
            }
        },{type: "separator"}, {label: "Blah2"}
        ]
    },{label: "other"}]);
    Menu.setApplicationMenu(menu)
}

app.on('ready', createWindow);