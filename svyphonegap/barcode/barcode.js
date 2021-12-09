angular.module('svyphonegapBarcode', ['servoy']).factory("svyphonegapBarcode", function($services, $window) {
		var scope = $services.getServiceScope('svyphonegapBarCode');
		return {
			scan: function(successCallback, errorCallback, options) {
				try {
					cordova.plugins.barcodeScanner.scan(function(data) {
							$window.executeInlineScript(successCallback.formname, successCallback.script, [data]);
						}, function(err) {
							$window.executeInlineScript(errorCallback.formname, errorCallback.script, [err]);
						}, options);
				} catch (e) {
					console.error('Error scanning barcode: ' + e.message)
				}

			},
			isSupported: function(callbackMethod) {
				try {
					return !!cordova.plugins.barcodeScanner;
				} catch (e) {
					return false;
				}
			}
		}
	}).run(function($rootScope, $services) { })