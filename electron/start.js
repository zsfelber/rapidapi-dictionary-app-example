const { app, session, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const { exit } = require("process");
const findChromeVersion = require("find-chrome-version");

const hub = require("./localserver/hub");

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

function loadMainWindow() {
    console.log("electron.loadMainWindow");

    printVersion();

    // https://www.npmjs.com/package/electron-chrome-extensions
    const mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            // Recommended options for loading remote content
            sandbox: true,
            contextIsolation: true
        }
    });


    let index = path.join(__dirname, "..", "public", "index.html").normalize();
    console.log("index:" + index);
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
    if (mainWindow.getAllWindows().length === 0) {
        loadMainWindow();
    }
});

ipcMain.handle('service', (event, note) => {
    console.log("electron.invoke ", note);
    let promise = hub.invoke(note.id, note.qs);
    return promise;
});

