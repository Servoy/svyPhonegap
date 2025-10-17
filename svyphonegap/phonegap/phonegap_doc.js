/*
 * A service containing general purpose phonegap access (permissions, script exec., build info, beep, vibration, pause/back/resume, ...) - when running the client wrapped inside a PhoneGap app.
 */


function init(onReady) {}
function setOnResumeMethod(callbackMethod) {}
function setOnPauseMethod(callbackMethod) {}
function setOnBackMethod(callbackMethod) {}
function exit() {}
function quitServoySolution() {}
function executeScript(script, scriptArguments) {}
function getBuildInfo() {}
function executeBeep(times) {}
function executeVibration(time) {}
function setTextZoom(textZoom) {}
function checkPermission(permission, successCallbackMethod, errorCallbackMethod) {}
function requestPermissions(permissions, successCallbackMethod, errorCallbackMethod) {}
