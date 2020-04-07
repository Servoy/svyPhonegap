cordova.define("com.alignace.cordova.plugin.card.reader.CardReaderPlugin", function(require, exports, module) {
/* cordova.define("com.alignace.cordova.plugin.card.reader.CardReaderPlugin", function(require, exports, module) { */

/**
 * CardReaderPlugin.js
 * Cordova plugin for 3.5mm Headphone Jack Mini Magnetic Mobile Card Reader
 * @Copyright 2015 Alignace LLC. http://www.alignace.com
 * @author Ayajahmed Shaikh <ayaj.shaikh@alignace.com>
 * @Since 21 April, 2015
 */

var CardReaderPlugin = function() {

};

CardReaderPlugin.prototype.start = function(successCallback, errorCallback) {

    if (errorCallback == null) { errorCallback = function() {}}

    if (typeof errorCallback != "function")  {
        console.log("Start failure: failure parameter not a function");
        return
    }

    if (typeof successCallback != "function") {
        console.log("Start failure failure: success callback parameter must be a function");
        return
    }
    cordova.exec(successCallback, errorCallback, "CardReaderPlugin", "start", []);
};

CardReaderPlugin.prototype.stop = function(successCallback, errorCallback) {

    if (errorCallback == null) { errorCallback = function() {}}

    if (typeof errorCallback != "function")  {
        console.log("Stop failure: failure parameter not a function");
        return
    }

    if (typeof successCallback != "function") {
        console.log("Stop failure failure: success callback parameter must be a function");
        return
    }
    cordova.exec(successCallback, errorCallback, "CardReaderPlugin", "stop", []);
};

//-------------------------------------------------------------------
if(!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.CardReaderPlugin) {
    window.plugins.CardReaderPlugin = new CardReaderPlugin();
}

if (typeof module != 'undefined' && module.exports) {
  module.exports = CardReaderPlugin;
}


//EOF
/* }); */

});
