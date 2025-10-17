/*
 * A service that can be used for taking or retrieving a picture - when running the client wrapped inside a PhoneGap app.
 */

/**
 * Takes a photo using the camera, or retrieves a photo from the device's image gallery.
 * For more details please check the Cordova camera plugin documentation.
 * 
 * @param {Function} [successCallback] will be called when and if the picture was taken/retrieved successfully.
 * @param {Function} [errorCallback] will be called if getting the picture failed.
 * @param {Object} [options] the options to be used for taking or getting the picture.
 */
function getPicture(successCallback, errorCallback, options) {
}

/**
 * Checks if taking pictures is supported.
 * 
 * @return {Boolean} true if taking pictures is supported in this configuration & device; false otherwise.
 */
function isSupported() {
}