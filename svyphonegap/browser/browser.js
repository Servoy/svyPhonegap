angular.module('svyphonegapBrowser', ['servoy']).factory("svyphonegapBrowser", function($services) {
		var scope = $services.getServiceScope('svyphonegapBrowser');
		return {
			/**
			 * Open a link on device's default browser
			 * @param {String} url
			 *
			 */
			openExternalLink: function(url) {

				Bridge.executeMethod(openExternalLink, null, [url]);

				function openExternalLink(url) {
					try {
						if (device.platform === 'Android') {
							return navigator.app.loadUrl(url, { openExternal: true });
						} else {
							return window.open(url, '_system','location=no');
						}
					} catch (e) {
						window.alert('error opening link' + e.message);
					}
				}
			}
		}
	}).run(function($rootScope, $services) { })