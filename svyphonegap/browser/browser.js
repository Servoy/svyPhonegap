angular.module('svyphonegapBrowser', ['servoy']).factory("svyphonegapBrowser", function($services) {
		var scope = $services.getServiceScope('svyphonegapBrowser');
		return {
			/**
			 * Open a link on device's default browser
			 * @param {String} url address of web page
			 *
			 */
			openExternalLink: function(url) {
				try {
					if (device.platform === 'Android') {
						return navigator.app.loadUrl(url, { openExternal: true });
					} else {
						return window.open(url, '_system', 'location=no');
					}
				} catch (e) {
					window.alert('error opening link' + e.message);
				}
			},
			openPhone: function(phone) {
					try {
						var newPhone = 'tel:' + phone;
						if (device.platform === 'Android') {								
							return cordova.InAppBrowser.open(newPhone, '_system');
						} else {
							return window.open(newPhone, '_system');
						}
					} catch (e) {
						window.alert('Error opening Phone Dial' + e.message);
					}				
				}
		}
	}).run(function($rootScope, $services) { })