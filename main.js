const { app, BrowserWindow } = require('electron')

function createWindow() {
  var win = new BrowserWindow({
    width: 640,
    height: 480,
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.loadFile('index.html')
}

app.whenReady().then(createWindow)
