cordova.define("com.jkt.zebra.barcode.plugin.ZebraBarcodePlugin", function(require, exports, module) {
var argscheck = require('cordova/argscheck'),
	channel = require('cordova/channel'),
	utils = require('cordova/utils'),
	exec = require('cordova/exec'),
	cordova = require('cordova');

channel.createSticky('onZebraBarcodePluginReady');
// Tell cordova channel to wait on the CordovaInfoReady event
channel.waitForInitialization('onZebraBarcodePluginReady');

/**
 * This represents the mobile device, and provides properties for inspecting the model, version, UUID of the
 * phone, etc.
 * @constructor
 */
function ZebraBarcodePlugin () {
	this.available = false;
	var me = this;

	channel.onCordovaReady.subscribe(function () {
		exec(function () {
			me.available = true;
			channel.onZebraBarcodePluginReady.fire();
		}, function () {
			me.available = false;
		}, "ZebraBarcodePlugin", "init", []);
	});
}

ZebraBarcodePlugin.prototype.startHardKeyRead = function (successCallback, errorCallback) {
	argscheck.checkArgs('fF', 'ZebraBarcodePlugin.startHardRead', arguments);
	exec(successCallback, errorCallback, "ZebraBarcodePlugin", "startHardKeyRead", []);
};

ZebraBarcodePlugin.prototype.startSoftKeyRead = function (successCallback, errorCallback) {
	argscheck.checkArgs('fF', 'ZebraBarcodePlugin.startSoftRead', arguments);
	exec(successCallback, errorCallback, "ZebraBarcodePlugin", "startSoftKeyRead", []);
};

ZebraBarcodePlugin.prototype.stopReading = function () {
	exec(function () {}, function () {}, "ZebraBarcodePlugin", "stopReading", []);
};

ZebraBarcodePlugin.prototype.enableReading = function () {
	exec(function () {}, function () {}, "ZebraBarcodePlugin", "enableReading", []);
};

ZebraBarcodePlugin.prototype.init = function () {
	exec(function () {}, function () {}, "ZebraBarcodePlugin", "init", []);
};

ZebraBarcodePlugin.prototype.reinit = function () {
	exec(function () {}, function () {}, "ZebraBarcodePlugin", "reinit", []);
};

ZebraBarcodePlugin.prototype.deinit = function () {
	exec(function () {}, function () {}, "ZebraBarcodePlugin", "deinit", []);
};


module.exports = new ZebraBarcodePlugin();

});
