# Momentum Appium Sample

![GitHub Logo](/logo.png)

A small node library helps you to run your Momentum scripts from your own terminal.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

Install Appium (http://appium.io/docs/en/about-appium/getting-started/)

```
npm i -g appium
```


Install Mocha (https://mochajs.org/#getting-started)

```
npm i -g mocha
```

### Installing

Clone the project

```
git clone https://github.com/mobven/momentum-appium-sample
cd momentum-appium-sample
```

Install dependencies via following command

```
npm i
```

Edit config.js

```
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
};

//Set relative path for screencasts, make sure that path is writable
exports.screenShotPath = "/hdd/screenshots/";

// Server configuration
exports.serverConfig = {
  host: "localhost",
  port: 4723
};
```


## Prepare for testing

Put your generated Momentum scripts under scripts/momentum folder


### Run the tests

```
mocha scripts/momentum/Scenario-Script.js
```

## Built With

* [Appium](http://appium.io) - Test automation framework 
* [Mocha](https://mochajs.org) - JavaScript test framework
* [Momentum](http://mobven.com/momentum) - Test automation platform

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
