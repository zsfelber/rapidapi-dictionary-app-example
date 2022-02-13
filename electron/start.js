const { app, session, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const { exit } = require("process");

const hub = require("./localserver/hub");

// Application already running, so we close now
if (!app.requestSingleInstanceLock()) {
    console.log("app is already running. exit")
    app.quit();
    exit(0);
}


async function printVersion() {
    //return promise;*/

    console.log(`node version is ${process.version}`);

    console.log(`other versions ${JSON.stringify(process.versions)}`);

}

function loadWindow(uri) {

    let absfile = path.join(__dirname, "..", "public", uri).normalize();

    console.log("loadWindow " + absfile);

    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            // Recommended options for loading remote content
            sandbox: true,
            contextIsolation: true
        }
    });

    win.loadFile(absfile);

    win.setMenuBarVisibility(false);

    return win;
}

function loadMainWindow() {
    console.log("electron.loadMainWindow");

    printVersion();

    loadWindow("index.html");
}

app.on("ready", loadMainWindow);
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
app.on("activate", () => {
    if (mainWindow.getAllWindows().length === 0) {
        loadMainWindow();
    }
});

ipcMain.handle('service', (event, note) => {
    console.log("electron.invoke service ", note);
    let promise = hub.invoke(note.id, note.qs);
    return promise;
});

ipcMain.handle('loadWindow', (event, note) => {
    console.log("electron.invoke loadWindow ", note);
    loadWindow(note.uri);
});
