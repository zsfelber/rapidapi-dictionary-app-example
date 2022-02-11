t looks like Electron's security evolved like this (source).

Electron 1 nodeIntegration defaults to true

Renderer has full access to Node API -- huge security risks if Renderer loads remote code.

Electron 5 nodeIntegration defaults to false

When set to false, a preload script is used to expose specific API to Renderer. (The preload script always has access to Node APIs regardless of the value of nodeIntegration)

//preload.js
window.api = {
    deleteFile: f => require('fs').unlink(f)
}
Electron 5 contextIsolation defaults to true (actually still defaults to false in Electron 11)

This causes preload script to run in a separate context. You can no longer do window.api = .... You now have to do:

//preload.js
const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('api', {
    deleteFile: f => require('fs').unlink(f)
})
Electron 6 require()ing node builtins in sandboxed renderers no longer implicitly loads the remote version

If Renderer has sandbox set to true, you have to do:

//preload.js
const { contextBridge, remote } = require('electron')

contextBridge.exposeInMainWorld('api', {
    deleteFile: f => remote.require('fs').unlink(f)
})
Electron 10 enableRemoteModule default to false (remote module deprecated in Electron 12)

The remote module is used when you need to access Node APIs from a sandboxed Renderer (as in above example); or when you need to access Electron APIs that are available only to the Main process (such as dialog, menu). Without remote, you'll need to write explicit IPC handlers like follows.

//preload.js
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('api', {
    displayMessage: text => ipcRenderer.invoke("displayMessage", text)
})

//main.js
const { ipcMain, dialog } = require('electron')

ipcMain.handle("displayMessage", text => dialog.showMessageBox(text))
Electron 10 deprecate nodeIntegration flag (removed in Electron 12)

Recommendation
Always set {nodeIntegration: false, contextIsolation: true, enableRemoteModule: false}.

