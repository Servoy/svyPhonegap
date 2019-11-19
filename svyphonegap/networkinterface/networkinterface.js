angular.module('svyphonegapNetworkinterface', ['servoy']).factory("svyphonegapNetworkinterface", function($services) {
		var scope = $services.getServiceScope('svyphonegapNetworkinterface');
		return {
			/**
			 * Get WIFI IP Address
			 * </ul>
			 *
			 * @param {Function} successCallback
			 * @param {Function} errorCallback
			 *
			 */
			getWiFiIPAddress: function(successCallback, errorCallback) {				
				networkinterface.getWiFiIPAddress(function(res) {
					$window.executeInlineScript(successCallback.formname, successCallback.script, [res, Servoy.watchID]);
				}, function(err) {
					$window.executeInlineScript(errorCallback.formname, errorCallback.script, [err]);
				});
				
			},
			/**
			 * Get Carrier IP Address
			 * </ul>
			 *
			 * @param {Function} successCallback
			 * @param {Function} errorCallback
			 *
			 */
			getCarrierIPAddress: function(successCallback, errorCallback) {
				networkinterface.getCarrierIPAddress(function(res) {
					$window.executeInlineScript(successCallback.formname, successCallback.script, [res, Servoy.watchID]);
				}, function(err) {
					$window.executeInlineScript(errorCallback.formname, errorCallback.script, [err]);
				});				
			},

			/**
			 * Get Proxy Information for a URL.
			 * </ul>
			 *
			 * @param {String} url
			 * @param {Function} successCallback
			 * @param {Function} errorCallback
			 *
			 */
			getHttpProxyInformation: function(url, successCallback, errorCallback) {
				networkinterface.getHttpProxyInformation(url, function(res) {
					$window.executeInlineScript(successCallback.formname, successCallback.script, [res, Servoy.watchID]);
				}, function(err) {
					$window.executeInlineScript(errorCallback.formname, errorCallback.script, [err]);
				});							
			},
		}
	}).run(function($rootScope, $services) { })