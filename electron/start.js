const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

const hub = require("../localserver/hub");

const loadMainWindow = () => {
    const mainWindow = new BrowserWindow({
        width : 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: false, contextIsolation: true, enableRemoteModule: false,
            preload: path.join(__dirname, 'preload.js')
        }
    });
    let index = path.join(__dirname, "..", "public", "index.html").normalize();
    console.log("index:"+index);
    mainWindow.loadFile(index);
}
app.on("ready", loadMainWindow);
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
});
app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        loadMainWindow();
    }
});

ipcMain.handle('service', (event, note) => {
    console.log("electron.invoke ", note);
    let promise = hub.invoke(note.id, note.qs);
    return promise;
});

const { session } = require('electron')

ipcMain.handle('loadExt', (event, note) => {
    console.log("electron.loadExt ", note);
    /*let promise = session.defaultSession.loadExtension(path.join(__dirname,"TransOver")).then(({ id }) => {
        console.log("TransOver loaded:"+id);
      // ...
    });
    return promise;*/
});


