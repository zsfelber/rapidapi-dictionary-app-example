const { app, BrowserWindow } = require("electron");
const path = require("path");

const loadMainWindow = () => {
    const mainWindow = new BrowserWindow({
        width : 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: true
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



