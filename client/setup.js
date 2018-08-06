var shouldFunc = require('should/as-function'),
    wd = require("wd"),
    logging = require("./logging"),
    format = require('string-format'),
    actions = require("./actions"),
    chai = require("chai"),
    chaiAsPromised = require("chai-as-promised"),
    should = chai.should(),
    {serverConfig, desiredCapabilities, screenShotPath} = require('../config');

chai.use(chaiAsPromised);
chaiAsPromised.transferPromiseness = wd.transferPromiseness;

var connector = wd.promiseChainRemote(serverConfig);
logging.configure(connector)

connector.swipe = actions.swipe;
exports.caps = desiredCapabilities;
connector.dragobject = actions.dragobject;
connector.dragObjectByElement = actions.dragObjectByElement;
connector.swipeUpObjectByElement = actions.swipeUpObjectByElement;
connector.longPressElement = actions.longPressElement;
connector.adbSendKeys = actions.adbSendKeys;

exports.logging = logging;
exports.source = screenShotPath;
exports.connector = connector;
exports.format = format;
exports.actions = actions;
exports.wd = wd;
exports.should = should;
exports.shouldFunc = shouldFunc;
