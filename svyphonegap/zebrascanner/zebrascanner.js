angular.module('svyphonegapZebrascanner', ['servoy']).factory("svyphonegapZebrascanner", function($services, $window) {
		var scope = $services.getServiceScope('svyphonegapZebrascanner');
		return {
			startHardKeyRead: function(successCallback, errorCallback, wait) {
				try {
					if (!wait) wait = 0;
					setTimeout(function() {
							zebraBarcodePlugin.startHardKeyRead(function(data) {
									$window.executeInlineScript(successCallback.formname, successCallback.script, [data]);
								}, function(err) {
									$window.executeInlineScript(errorCallback.formname, errorCallback.script, [err]);
								});
						}, wait);

				} catch (e) {
					console.error('Error scanning barcode: ' + e.message)
				}
			},

			startSoftKeyRead: function(successCallback, errorCallback, wait) {
				try {
					if (!wait) wait = 0;
					setTimeout(function() {
							zebraBarcodePlugin.startSoftKeyRead(function(data) {
									$window.executeInlineScript(successCallback.formname, successCallback.script, [data]);
								}, function(err) {
									$window.executeInlineScript(errorCallback.formname, errorCallback.script, [err]);
								});
						}, wait);
				} catch (e) {
					console.error('Error scanning barcode: ' + e.message)
				}
			},
			init: function() {
				try {
					zebraBarcodePlugin.init();
				} catch (e) {
					console.error('Error failed to init: ' + e.message)
				}
			},
			reinit: function() {
				try {
					zebraBarcodePlugin.reinit();
				} catch (e) {
					console.error('Error failed to reinit: ' + e.message)
				}
			},
			deinit: function() {
				try {
					zebraBarcodePlugin.deinit();
				} catch (e) {
					console.error('Error failed to deinit: ' + e.message)
				}
			},
			stopReading: function() {
				try {
					zebraBarcodePlugin.stopReading();
				} catch (e) {
					console.error('Error stop reading: ' + e.message)
				}
			},

			isSupported: function() {
				if (typeof zebraBarcodePlugin == 'undefined') return false;
				return true;
			}
		}
	}).run(function($rootScope, $services) { })