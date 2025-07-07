const {app, BrowserWindow, ipcMain} = require('electron');
const path = require('path');
const db = require('./backend/database');
const { error } = require('console');


function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            nodeIntegration: false,
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

function createAddBarrelWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        title: "Добавить отгрузку",
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false,
            contextIsolation: true,
        }
    });

    win.loadFile('public/add-barrel-window.html');
}

ipcMain.on('open-add-barrel-window', () => {
    createAddBarrelWindow();
});

function ProductsWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        title: "Добавить отгрузку",
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false,
            contextIsolation: true,
        }
    });

    win.loadFile('public/products-window.html');
}

ipcMain.on('open-add-barrel-window', () => {
    ProductsWindow();
});

ipcMain.handle('add-barrel-type', async (event, name, capacity) => {
    try {
        await db.query('INSERT INTO barrel_type (name, capacity) VALUE ($1, $2)', [name, capacity]);
        return true;
    } catch (error) {
        console.error('Ошибка добавления товара:', error);
        return false;
    }
});