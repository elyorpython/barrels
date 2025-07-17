// preload.js
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  ping: () => ipcRenderer.invoke('ping'),
  addBarrelType: (name, product_id_su, liters) => ipcRenderer.invoke('add-barrel-type', name, product_id_su, liters),
  openAddBarrelWindow: () => ipcRenderer.send('open-add-barrel-window'),
  getProductTable: () => ipcRenderer.invoke("get-product-table"),
});
