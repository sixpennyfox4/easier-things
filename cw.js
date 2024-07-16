const { app, BrowserWindow } = require('electron');
const path = require('path');
const fs = require('fs')

const fileSet = fs.readFileSync(path.join(__dirname, '.settings.json'), 'utf-8');
const settingsJson = JSON.parse(fileSet);

const filej = fs.readFileSync(path.join(__dirname, settingsJson.defConfFile), 'utf-8');
const langJson = JSON.parse(filej);

let winWidth;
let winHeight;
let winContentFile;
let winIcon;

winWidth = langJson.createWindow.htmlBasedWindow.width
winHeight = langJson.createWindow.htmlBasedWindow.height
winContentFile = langJson.createWindow.htmlBasedWindow.cFile
winIcon = langJson.createWindow.htmlBasedWindow.icon

function cc() {
    function createWindow() {
        const mainWindow = new BrowserWindow({
            width: winWidth,
            height: winHeight,
            icon: path.join(__dirname, winIcon),
            webPreferences: {
                preload: path.join(__dirname, 'preload.js'),
            },
        });
    
        mainWindow.loadFile(winContentFile);
    };
    
    app.whenReady().then(createWindow);
    
    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit();
        };
    });
    
    app.on('active', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        };
    });
}

cc()