/*
 * A service that can be used for basic file operations on the device (open, read, write, saveToGallery) - when running the client wrapped inside a PhoneGap app.
 */

function openfile(fileName, fileType, dir, callbackSuccess, callbackError) {
}

function readFromFile(fileName, dir, callbackSuccess, callbackError) {
}

function writeToFile(fileName, dir, data, callbackSuccess, callbackError) {
}

/**
 * @param {String} imgData
 * @param {String} galleryFolder Use a specific folder for gallery on Android 13+
 * @param {Function} [cb]
 * @param {Function} [err]
 */
function saveToGallery(imgData, galleryFolder, callbackSuccess, callbackError) {
}
