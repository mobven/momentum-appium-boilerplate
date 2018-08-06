/* Appium capabilities
 * @doc http://appium.io/docs/en/writing-running-appium/caps/
 */

exports.desiredCapabilities = {
  platformName: "android",
  platformVersion: "1.0",
  deviceName: "Android Device",
  automationName: "UIAutomator2",
  udid: "udid",
  app: "sample-android.apk",

  //Advanced capabilities
  appPackage: "",
  appActivity: "",
  browserName: "",
  ignoreUnimportantViews: false,
  unicodeKeyboard: true,
  resetKeyboard: true,
  clearSystemFiles: true,
  usePrebuiltWDA: false,
  useNewWDA: true,
  noReset: true,
  fullReset: false,
  wdaLaunchTimeout: 100000,
};

//Set relative path for screencasts, make sure that path is writable
exports.screenShotPath = "/hdd/screenshots/";

// Server configuration
exports.serverConfig = {
  host: "localhost",
  port: 4723
};
