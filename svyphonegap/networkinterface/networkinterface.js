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
				Bridge.executeMethod(getWiFiIPAddress, null, [successCallback, errorCallback]);

				function getWiFiIPAddress(successCallback, errorCallback) {
					networkinterface.getWiFiIPAddress(successCallback, errorCallback);
				}
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
				Bridge.executeMethod(getCarrierIPAddress, null, [successCallback, errorCallback]);

				function getCarrierIPAddress(successCallback, errorCallback) {
					networkinterface.getCarrierIPAddress(successCallback, errorCallback);
				}
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
				Bridge.executeMethod(getHttpProxyInformation, null, [url, successCallback, errorCallback]);

				function getHttpProxyInformation(url, successCallback, errorCallback) {
					networkinterface.getHttpProxyInformation(url, successCallback, errorCallback);
				}
			},
		}
	}).run(function($rootScope, $services) { })