angular.module('svyphonegapFingerprint', ['servoy']).factory("svyphonegapFingerprint", function($services) {
		var scope = $services.getServiceScope('svyphonegapFingerprint');
		return {
			isAvailable: function(isAvailableSuccess, isAvailableError) {
				Bridge.executeMethod(isAvailable, null, [isAvailableSuccess, isAvailableError]);

				function isAvailable(successCallback, errorCallback) {
					FingerprintAuth.isAvailable(successCallback, errorCallback);
				}
			},
			encrypt: function(encryptConfig, encryptSuccessCallback, encryptErrorCallback) {
				Bridge.executeMethod(encrypt, null, [encryptConfig, encryptSuccessCallback, encryptErrorCallback]);

				function encrypt(encryptConfig, encryptSuccessCallback, encryptErrorCallback) {
					FingerprintAuth.encrypt(encryptConfig, encryptSuccessCallback, encryptErrorCallback);
				}
			},
			decrypt: function(decryptConfig, decryptSuccessCallback, decryptErrorCallback) {
				Bridge.executeMethod(decrypt, null, [decryptConfig, decryptSuccessCallback, decryptErrorCallback]);

				function decrypt(decryptConfig, decryptSuccessCallback, decryptErrorCallback) {
					FingerprintAuth.decrypt(decryptConfig, decryptSuccessCallback, decryptErrorCallback);
				}
			},
			delete: function(config, successCallback, errorCallback) {
				Bridge.executeMethod(deleteFunc, null, [config, successCallback, errorCallback]);

				function deleteFunc(config, successCallback, errorCallback) {
					FingerprintAuth.decrypt(config, successCallback, errorCallback);
				}
			}
		}
	}).run(function($rootScope, $services) { })