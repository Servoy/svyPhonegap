angular.module('svyphonegapBarcode', ['servoy']).factory("svyphonegapBarcode", function($services) {
		var scope = $services.getServiceScope('svyphonegapBarCode');
		return {
			scan: function(successCallback, errorCallback, options) {
				Bridge.executeMethod(scanBarcode, null, [successCallback, errorCallback]);

				function scanBarcode(successCallback, errorCallback) {
					try {
						cordova.plugins.barcodeScanner.scan(successCallback, errorCallback);
					} catch (e) {
						window.alert('Error scanning barcode: ' + e.message);
					}
				}
			},
			isSupported: function(callbackMethod) {
				Bridge.executeMethod(isSupported, callbackMethod);

				function isSupported() {
					try {
						return !!cordova.plugins.barcodeScanner;
					} catch (e) {
						return false;
					}
				}
			}
		}
	}).run(function($rootScope, $services) { })