import { Injectable } from '@angular/core';
import { ServoyPublicService } from '@servoy/public';
declare let cordova: any;
declare let device: any;
declare let window: any;

@Injectable()
export class fileService {
    constructor(private servoyService: ServoyPublicService) {}

    private helperCB(cb, d) {
        if (cb) {
            cb(d);
        }
    }

    private err(e) {
        console.log(e);
    }

    /**
     * @param {String} fileName
     * @param {String} dir
     * @param {Function} [cb]
     * @param {Function} [err]
     * @properties={typeid:24,uuid:"5E1834FA-B7B5-4566-B9DC-12CB5F3D73CF"}
     */
    openfile(fileName, fileType, dir, cb, err) {
        var pathToFile = cordova.file[dir] + fileName;
        cordova.plugins.fileOpener2.open(pathToFile, fileType, {
            error: function(e) {
                this.helperCB(cb, e);
            }.bind(this),
            success: function(e) {
                this.helperCB(err, e);
            }.bind(this),
        });
    }

    /**
     * @param {String} fileName
     * @param {String} dir
     * @param {Function} [cb]
     * @param {Function} [err]
     * @properties={typeid:24,uuid:"5E1834FA-B7B5-4566-B9DC-12CB5F3D73CF"}
     */
    readFromFile(fileName, dir, cb, err) {
        var pathToFile = cordova.file[dir] + fileName;
        window.resolveLocalFileSystemURL(pathToFile, function(fileEntry) {
            fileEntry.file(function(file) {
                var reader = new FileReader();
                reader.onloadend = function(e) {
                    this.helperCB(cb, e.target._result);
                }.bind(this);
                reader.readAsText(file);
            }.bind(this), function(e) {
                this.helperCB(err, e);
            }.bind(this));
        }.bind(this), function(e) {
            this.err(e);
        }.bind(this));
    }

    /**
     * @param {String} fileName
     * @param {String} dir
     * @param data
     * @param {Function} [cb]
     * @param {Function} [err]
     * @properties={typeid:24,uuid:"A3078652-DF4B-4591-B4BD-54F85C573A19"}
     */
    writeToFile(fileName, dir, data, cb, err) {

        if (!cordova.file) {
            console.log('File plugin not loaded..');
            return;
        }

        window.resolveLocalFileSystemURL(cordova.file[dir], function(directoryEntry) {
            directoryEntry.getFile(fileName, { create: true }, function(fileEntry) {
                fileEntry.createWriter(function(fileWriter) {
                    fileWriter.onwriteend = function(e) {
                        this.helperCB(cb);
                    }.bind(this);
                    fileWriter.onerror = function(e) {
                        this.helperCB(err, e);
                    }.bind(this);
                    var binaryString;
                    try {
                        binaryString = window.atob(data.replace(/\r\n/g, '').replace(/\r\n/g, '').replace(/\r\n/g, ''));

                        // Process the decoded string
                    } catch (error) {
                        if (error.name === 'InvalidCharacterError') {
                            console.error('Invalid Base64 encoding:', data);
                        } else {
                            console.error('Unknown error:', error);
                        }
                    }

                    // Create an array of bytes from the binary string
                    var bytes = new Uint8Array(binaryString.length);
                    for (let i = 0; i < binaryString.length; i++) {
                        bytes[i] = binaryString.charCodeAt(i);
                    }
                    var blob = new Blob([bytes]);
                    fileWriter.write(blob);
                }.bind(this), function(e) {
                    this.helperCB(err, e);
                }.bind(this));
            }.bind(this), function(e) {
                this.err(e);
            }.bind(this));
        }.bind(this), function(e) {
            err(e);
        }.bind(this));

    }

    /**
     * @param data
     * @param {String} galleryFolder Use a specific folder for gallery on Android 13+
     * @param {Function} [cb]
     * @param {Function} [err]
     * @properties={typeid:24,uuid:"A3078652-DF4B-4591-B4BD-54F85C573A19"}
     */
    saveToGallery(data, galleryFolder, cb, err) {
		try {
        var permissions = cordova.plugins.permissions;
            permissions.requestPermissions(['android.permission.READ_MEDIA_IMAGES'], function(d){}, function(d){});
		}
		catch (e) {
			console.log(e);
		}
        if (!data || data == '') {
            this.helperCB(err, 'Image data is invalid');
            return;
        }
        var dir = '';
        var fileName = 'temp_img.jpeg'
        var isIpad = (navigator.userAgent.match(/(iPad)/) /* iOS pre 13 */ || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) /* iPad OS 13+ */ );
        var isIphone = navigator.userAgent.toLowerCase().match(/iphone|ipad|ipod/i);
        var isAndroid = navigator.userAgent.toLowerCase().match(/android/i);

        if (isIpad || isIphone) {
            dir = 'documentsDirectory'
        }

        if (isAndroid) {
            dir = 'externalApplicationStorageDirectory'
        }
        this.writeToFile(fileName, dir, data, function(d) {
            cordova.plugins.imagesaver.saveImageToGallery(cordova.file[dir] + '/' + fileName, galleryFolder, function(dd) { this.helperCB(cb,dd); }.bind(this), function(ee) { this.helperCB(err, ee); }.bind(this))
        }.bind(this), function(e) {
            this.helperCB(err, e);
        }.bind(this))
    }

}
