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
};

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

ipcMain.handle('add-barrel-type', async (event, name, product_id_su, liters) => {
  try {
    await db.addBarrelType(name, product_id_su, liters);
    return true;
  } catch (err) {
    console.error('Error Add Product:', err);
    return false;
  }
});

ipcMain.handle("get-product-table", async () => {
    try {
        const result = await db.client.query("SELECT id, name, product_id_su, liters FROM products ORDER BY id DESC");
        return result.rows;
    } catch (error) {
        console.error("Error fetching products", error);
        return [];
    }
});