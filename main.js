const { app, BrowserWindow } = require("electron");

let mainWindow;

function createMainWindow() {
  mainWindow = new BrowserWindow({
    title: "Image Resizer",
    width: 500,
    height: 600,
    icon: "./assets/Icon_256x256.png",
  });

  //   mainWindow.loadURL(`file://${__dirname}/app/index.html`);

  mainWindow.loadFile("./app/index.html");
}

app.on("ready", createMainWindow);
