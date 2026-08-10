/*
 * A service for working with device orientation - when running the client wrapped inside a PhoneGap app.
 */

function lock(orientationType) {}
function unlock() {}
/**
 * Returns the current screen orientation as a string.
 * The value is one of the constants returned by getOrientationTypes()
 * ('portrait-primary', 'portrait-secondary', 'landscape-primary' or 'landscape-secondary').
 *
 * @return {String} The current screen orientation; defaults to 'portrait-primary' if unavailable.
 */
function getScreenOrientation() {}
/**
 * Returns the current screen orientation angle in degrees, clockwise from the
 * natural orientation: 0, 90, 180 or -90.
 *
 * @return {Number} The current screen orientation angle; defaults to 0 if unavailable.
 */
function getScreenOrientationAngle() {}
function getOrientationTypes() {}
function setOrientationChangeCallback(callbackMethod) {}
