cordova.define("phonegap-plugin-mobile-accessibility.mobile-accessibility", function(require, exports, module) {
var exec = require('cordova/exec');

var MobileAccessibility = function() {
    this._usePreferredTextZoom = false;
};

/**
 * Asynchronous call to native MobileAccessibility to return the current text zoom percent value for the WebView.
 * @param {function} callback A callback method to receive the asynchronous result from the native MobileAccessibility.
 */
MobileAccessibility.prototype.getTextZoom = function(callback) {
    exec(callback, null, "MobileAccessibility", "getTextZoom", []);
};

MobileAccessibility.prototype.setFontScaleToOne = function(callback) {
    exec(callback, null, "MobileAccessibility", "setFontScaleToOne", []);
};

/**
 * Asynchronous call to native MobileAccessibility to set the current text zoom percent value for the WebView.
 * @param {Number} textZoom A percentage value by which text in the WebView should be scaled.
 * @param {function} callback A callback method to receive the asynchronous result from the native MobileAccessibility.
 */
MobileAccessibility.prototype.setTextZoom = function(textZoom, callback) {
    exec(callback, null, "MobileAccessibility", "setTextZoom", [textZoom]);
};

/**
 * Asynchronous call to native MobileAccessibility to retrieve the user's preferred text zoom from system settings and apply it to the application WebView.
 * @param {function} callback A callback method to receive the asynchronous result from the native MobileAccessibility.
 */
MobileAccessibility.prototype.updateTextZoom = function(callback) {
    exec(callback, null, "MobileAccessibility", "updateTextZoom", []);
};

MobileAccessibility.prototype.usePreferredTextZoom = function(bool) {
    var currentValue = window.localStorage.getItem("MobileAccessibility.usePreferredTextZoom") === "true";

    if (arguments.length === 0) {
        return currentValue;
    }

    if (currentValue !== bool) {
        window.localStorage.setItem("MobileAccessibility.usePreferredTextZoom", bool);
    }

    var callback = function(){
        // Wrapping updateTextZoom call in a function to stop
        // the event parameter propagation. This fixes an error
        // on resume where cordova tried to call apply() on the
        // event, expecting a function.
        mobileAccessibility.updateTextZoom();
    };

    document.removeEventListener("resume", callback);

    if (bool) {
        // console.log("We should update the text zoom at this point: " + bool)
        document.addEventListener("resume", callback, false);
        mobileAccessibility.updateTextZoom();
    } else {
        mobileAccessibility.setTextZoom(100);
        mobileAccessibility.setFontScaleToOne();
    }

    return Boolean(bool);
};

var mobileAccessibility = new MobileAccessibility();

module.exports = mobileAccessibility;

});
