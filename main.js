const {app, BrowserWindow} = require('electron');
const path = require('path');
const dbase = require('./database');
const { error } = require('console');


function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        },
    });

    win.loadURL('http://localhost:5173');
    
    win.webContents.on('did-fail-load', (event, errorCode, errorDescription) => {
        console.error('Failed to load page:', errorDescription)
    });

    win.webContents.on('console-message',(_, levle, message) => {
        console.log(`Console: ${message}`);
    });
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});