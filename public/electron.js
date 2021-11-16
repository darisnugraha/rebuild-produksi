const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const isDev = require("electron-is-dev");
const { dialog } = require("electron");
let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    webPreferences: {
      plugins: true,
      allowRunningInsecureContent: true,
    },
    title: "AMG CADP",
    transparent: true,
    width: 900,
    height: 680,
    icon: __dirname + "/favicon.ico",
  });
  // mainWindow.webContents.openDevTools()
  // mainWindow.openDevTools();
  mainWindow.webContents.on(
    "will-download",
    (event, downloadItem, webContents) => {
      var fileName = dialog.showSaveDialog({
        defaultPath: downloadItem.getFilename(),
        filters: [{ name: "Excel", extensions: ["pdf"] }],
      });

      if (typeof fileName == "undefined") {
        downloadItem.cancel();
      } else {
        downloadItem.setSavePath(fileName);
      }
    }
  );
  mainWindow.loadURL(
    isDev ? "http://localhost:3000" : "http://localhost/amg-cadp-production"
  );
  mainWindow.on("closed", () => (mainWindow = null));
  mainWindow.setMenuBarVisibility(false);
  mainWindow.maximize();
}
app.commandLine.appendSwitch("ignore-certificate-errors", "true");
app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
