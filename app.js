const { app, BrowserWindow } = require('electron')
const electron = require('electron')
const path = require('path')
// Enable live reload for Electron too
require('electron-reload')(__dirname, {
  // Note that the path to electron may vary according to the main file
  electron: require(`${__dirname}/node_modules/electron`)
})

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })
  let login = true
  if (login) {
    mainWindow.loadFile('apps/pages/home/index.html')
  } else {
    mainWindow.loadFile('apps/pages/auth/login.html')
  }
  // mainWindow.webContents.openDevTools();
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})