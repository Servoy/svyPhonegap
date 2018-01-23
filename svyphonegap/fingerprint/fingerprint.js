angular.module('svyphonegapFingerprint', ['servoy']).factory("svyphonegapFingerprint", function($services) {
		var scope = $services.getServiceScope('svyphonegapFingerprint');
		return {
			/**
			 * Check if fingerprint authentication is available
			 * </ul>
			 *
			 * @param {Function} isAvailableSuccess Result will depends on device and OS. <br> iPhone X will return 'face' other Android or iOS devices will return 'finger'
			 * @param {Function} isAvailableError
			 *
			 */
			isAvailable: function(isAvailableSuccess, isAvailableError) {
				Bridge.executeMethod(isAvailable, null, [isAvailableSuccess, isAvailableError]);

				function isAvailable(success, fail) {
					Fingerprint.isAvailable(success, fail);
				}
			},

			/**
			 * Show authentication dialogue
			 * </ul>
			 * @param {{clientId: String, clientSecret: String}} config configuration for fingerprint, clientSecret only needed for Android
			 * @param {Function} successCallback
			 * @param {Function} errorCallback
			 *
			 */
			show: function(config, successCallback, errorCallback) {
				Bridge.executeMethod(show, null, [config, successCallback, errorCallback]);

				function show(cfg, success, fail) {
					Fingerprint.show(cfg, success, fail);
				}
			}

		}
	}).run(function($rootScope, $services) { })