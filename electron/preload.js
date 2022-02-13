//https://stackoverflow.com/questions/44391448/electron-require-is-not-defined
//see e-README
console.log("preload...");
//window.ipcRenderer = require('electron').ipcRenderer;


//preload.js
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
    service: data => ipcRenderer.invoke("service", data),
    loadWindow: data => ipcRenderer.invoke("loadWindow", data)
});

