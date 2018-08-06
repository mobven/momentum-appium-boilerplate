"use strict";

var stepsApplied = [];

exports.configure = function (driver) {

  driver.on('status', function (info) {
     stepsApplied.push(("Server status : " +  info + "\n\n"));
  });

  driver.on('command', function (meth, path, data) {
    if(meth == "CALL" && path.substr(0, 4) == "init"){
      stepsApplied.push(("Application is being installing to device"));
    }
    else if(meth == "RESPONSE" && path.substr(0, 4) == "init"){
      stepsApplied.push(("Application has been installed to device"));
    }
    else if(meth != "takeScreenshot()" && path != "takeScreenshot()"){
      stepsApplied.push(meth);
      stepsApplied.push(path);
      stepsApplied.push((data || ''));
    }
  });

  driver.on('http', function (meth, path, data) {
    //  stepsApplied.push(("HTTP: " + meth + "\n\n"));
    //  stepsApplied.push(("HTTP: " + path + "\n\n"));
    //  stepsApplied.push(("HTTP: " + (data || '') + "\n\n"));
  });
};

exports.stepsApplied = stepsApplied;
