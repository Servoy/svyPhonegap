angular.module('svyphonegapFingerprintscan', ['servoy']).factory("svyphonegapFingerprintscan", function($services, $window) {
		var scope = $services.getServiceScope('svyphonegapFingerprintscan');
		return {
			/**
			 * Check if fingerprint authentication is available
			 * </ul>
			 *
			 * @param {Function} [isAvailableSuccess] Result will depends on device and OS. <br> iPhone X will return 'face' other Android or iOS devices will return 'finger'
			 * @param {Function} [isAvailableError]
			 *
			 */
			isAvailable: function(isAvailableSuccess, isAvailableError) {
				Fingerprint.isAvailable(function(data) {
						$window.executeInlineScript(isAvailableSuccess.formname, isAvailableSuccess.script, [data]);
					}, function(err) {
						$window.executeInlineScript(isAvailableError.formname, isAvailableError.script, [err]);
					});
			},

			/**
			 * Show authentication dialogue
			 * </ul>
			 * @param {{clientId: String, clientSecret: String}} config configuration for fingerprint, clientSecret only needed for Android
			 * @param {Function} [successCallback]
			 * @param {Function} [errorCallback]
			 *
			 */
			show: function(config, successCallback, errorCallback) {

				Fingerprint.show(config, function(data) {
						$window.executeInlineScript(successCallback.formname, successCallback.script, [data]);
					}, function(err) {
						$window.executeInlineScript(errorCallback.formname, errorCallback.script, [err]);
					});
			}

			/**
			 * Register a biometric secret in vault
			 * </ul>
			 * @param {{description: String, secret: String, invalidateOnEnrollment: boolean, disableBackup: boolean}} config for storing secret, disableBackup always disabled on Android
			 * @param {Function} [successCallback]
			 * @param {Function} [errorCallback]
			 *
			 */
			registerSecret: function(config, successCallback, errorCallback) {

				Fingerprint.registerBiometricSecret(config, function(data) {
						$window.executeInlineScript(successCallback.formname, successCallback.script, [data]);
					}, function(err) {
						$window.executeInlineScript(errorCallback.formname, errorCallback.script, [err]);
					});
			}

			/**
			 * Load a biometric secret from the vault
			 * </ul>
			 * @param {{description: String, disableBackup: boolean}} config for loading secret, disableBackup always disabled on Android
			 * @param {Function} [successCallback]
			 * @param {Function} [errorCallback]
			 *
			 */
			loadSecret: function(config, successCallback, errorCallback) {

				Fingerprint.loadBiometricSecret(config, function(data) {
						$window.executeInlineScript(successCallback.formname, successCallback.script, [data]);
					}, function(err) {
						$window.executeInlineScript(errorCallback.formname, errorCallback.script, [err]);
					});
			}

		}
	}).run(function($rootScope, $services) { })