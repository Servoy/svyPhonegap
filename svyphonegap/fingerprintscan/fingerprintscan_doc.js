/**
 * A service for working with fingerprint authentication - when running the client wrapped inside a PhoneGap app.
 */

/**
 * Check if fingerprint authentication is available
 *
 * @param {Function} [onSuccessCallbackMethod] Result will depends on device and OS. <br> iPhone X will return 'face' other Android or iOS devices will return 'finger'
 * @param {Function} [onErrorCallbackMethod]
 *
 */
function isAvailable(onSuccessCallbackMethod, onErrorCallbackMethod) {
}

/**
 * Show authentication dialogue
 * 
 * @param {{clientId: String, clientSecret: String}} config configuration for fingerprint, clientSecret only needed for Android
 * @param {Function} [successCallback]
 * @param {Function} [errorCallback]
 *
 */
function show(config, successCallback, errorCallback) {
}

/**
 * Register a biometric secret in vault
 * 
 * @param {{description: String, secret: String, invalidateOnEnrollment: Boolean, disableBackup: Boolean}} config for storing secret; disableBackup always disabled on Android
 * @param {Function} [successCallback]
 * @param {Function} [errorCallback]
 *
 */
function registerSecret(config, successCallback, errorCallback) {
}

/**
 * Load a biometric secret from the vault
 * 
 * @param {{description: String, disableBackup: boolean}} config for loading secret, disableBackup always disabled on Android
 * @param {Function} [successCallback]
 * @param {Function} [errorCallback]
 *
 */
function loadSecret(config, successCallback, errorCallback) {
}
