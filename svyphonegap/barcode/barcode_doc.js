/*
 * A service that can be used for scanning barcodes - when running the client wrapped inside a PhoneGap app.
 */

/**
 * Scans a barcode.
 * 
 * @param {Function} [successCallback] will be called when and if the barcode scan completed succesfully, with one argument: and object containing keys "text"/"format"/"cancelled".
 * @param {Function} [errorCallback] will be called if the barcode fails, with one argument: the error
 * @param {Object} [options] the options to be used for scanning as an object. These are the available options:
 *     <pre>
 *     {
 *         preferFrontCamera : true, // iOS and Android
 *         showFlipCameraButton : true, // iOS and Android
 *         showTorchButton : true, // iOS and Android
 *         torchOn: true, // Android, launch with the torch switched on (if available)
 *         saveHistory: true, // Android, save scan history (default false)
 *         prompt : "Place a barcode inside the scan area", // Android
 *         resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
 *         formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
 *         orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
 *         disableAnimations : true, // iOS
 *         disableSuccessBeep: false // iOS and Android
 *     }
 *     </pre>
 */
function scan(successCallback, errorCallback, options) {
}

/**
 * Checks if scanning barcodes is supported.
 * 
 * @return {Boolean} true if the scanning barcodes is supported in this configuration & device; false otherwise.
 */
function isSupported() {
}
