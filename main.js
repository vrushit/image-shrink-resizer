const { app, BrowserWindow } = require("electron");

process.env.NODE_ENV = "development";

const isDev = process.env.NODE_ENV !== "production" ? true : false;
const isWindow = process.platform === "win32" ? true : false;

let mainWindow;

function createMainWindow() {
  mainWindow = new BrowserWindow({
    title: "Image Resizer",
    width: 500,
    height: 600,
    icon: `${__dirname}/assets/icons/Icon_256x256.png`,
    resizable: isDev ? true : false,
  });

  //   mainWindow.loadURL(`file://${__dirname}/app/index.html`);

  mainWindow.loadFile("./app/index.html");
}

app.on("ready", createMainWindow);

app.allowRendererProcessReuse = true;
