/**
 * Created by spring on 2018/8/22.
 */

const opn = require('opn');
const Path = require('path');
const ExecSync = require('child_process').execSync;

/**
 * 获取本机ip地址
 */
function getLocalIp() {
  const interfaces = require('os').networkInterfaces();
  let localIp = '';
  Object.values(interfaces).forEach((iface) => {
    for (let i = 0; i < iface.length; i++) {
      const alias = iface[i];
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        localIp = alias.address;
        break;
      }
    }
  });
  console.log(localIp);
  return localIp;
}


function getChromeAppName() {
  switch (process.platform) {
    case 'darwin':
      return 'google chrome';
    case 'win32':
      return 'chrome';
    default:
      return 'google-chrome';
  }
}
const launchDevTools = function launchDevTools(ip, port) {
  console.log('launchDevTools', port);
  return new Promise((resolve, reject) => {
    const debuggerURL = `http://${ip || getLocalIp() || 'localhost'}:${port}/`;
    console.log('Launching Dev Tools...\n');
    if (process.platform === 'darwin') {
      try {
        // Try our best to reuse existing tab
        // on OS X Google Chrome with AppleScript
        ExecSync('ps cax | grep "Google Chrome"');
        ExecSync(`osascript "${Path.resolve(__dirname, './chrome.applescript')}" ${debuggerURL}`);
        console.log(Path.resolve(__dirname, './chrome.applescript'));
        return;
      } catch (err) {
        // Ignore errors.
      }
    }
    opn(debuggerURL, {
      app: [getChromeAppName()]
    }, (err) => {
      if (err) {
        console.error('Google Chrome exited with error:', err);
        reject(err);
      }
      console.log('success!');
      resolve();
    });
  });
};
module.exports = launchDevTools;