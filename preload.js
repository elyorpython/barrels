// preload.js
const { contextBridge, ipcRenderer } = require('electron');
const db = require('./backend/database')

contextBridge.exposeInMainWorld('electronAPI', {
  ping: () => ipcRenderer.invoke('ping'),
  addBarrelType: (name, capacity) => ipcRenderer.invoke('add-barrel-type', name, capacity),
  openAddBarrelWindow: () => ipcRenderer.send('open-add-barrel-window'),

});
