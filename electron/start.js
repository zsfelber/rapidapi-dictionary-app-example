const { app, session, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const { exit } = require("process");
const findChromeVersion = require("find-chrome-version");

const hub = require("../localserver/hub");
const { ElectronChromeExtensions } = require('electron-chrome-extensions');

// Application already running, so we close now
if (!app.requestSingleInstanceLock()) {
    console.log("app is already running. exit")
    app.quit();
    exit(0);
}


async function printVersion() {
    //return promise;*/
    const chromeVersion = await findChromeVersion();

    console.log(`node version is ${process.version}`);

    console.log(`chrome version is ${chromeVersion}`);

    console.log(`other versions ${JSON.stringify(process.versions)}`);

}

function loadExt() {
    console.log("electron.loadExt");
    //session.defaultSession.on('extension-loaded', (event, extension) => {
    //    console.log("extension loaded:",extension);
    //  });
    session.defaultSession.on('extension-unloaded', (event, extension) => {
        console.log("extension unloaded:",extension);
      });
    session.defaultSession.on('extension-ready', (event, extension) => {
        console.log("extension ready:",extension);
      });
    // transover chrome
    // /home/zsfelber/.config/google-chrome/Default/Extensions/aggiiclaiamajehmlfpkjmlbadmkledi
    // aggiiclaiamajehmlfpkjmlbadmkledi
    // path.join(__dirname,"TransOver")
    // gejefojdnhdpifjnamlfandfnmgiggba
    let promise = session.defaultSession.loadExtension("/home/zsfelber/.config/google-chrome/Default/Extensions/aggiiclaiamajehmlfpkjmlbadmkledi/1.63_0").then(({ id }) => {
        console.log("TransOver loadExtension ok:"+id);
        // ...
    });

}

const loadMainWindow = () => {
    const mainWindow = new BrowserWindow({
        width : 1200,
        height: 800,
        webPreferences: {
            //nodeIntegration: false, contextIsolation: true, enableRemoteModule: false,
            preload: path.join(__dirname, 'preload.js'),
            webSecurity: false,
            nodeIntegration: true,
            webviewTag: true
        },    
    });
    app.whenReady().then(async () => {
        await loadExt();
      });

    printVersion();

    //const extensions = new ElectronChromeExtensions();
    //extensions.addTab(mainWindow.webContents, mainWindow);

    //mainWindow.addDevToolsExtension(
    //    path.join(__dirname, 'TransOver')
    //);
    //mainWindow.addExtension(
    //    path.join(__dirname,"TransOver")
    //);

    let index = path.join(__dirname, "..", "public", "index.html").normalize();
    console.log("index:"+index);
    mainWindow.loadFile(index);
    
    mainWindow.setMenuBarVisibility(true);

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


ipcMain.handle('loadExt', async (event, note) => {

});

