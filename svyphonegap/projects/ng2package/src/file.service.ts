import { Injectable } from '@angular/core';
import { ServoyPublicService } from '@servoy/public';
declare let CameraPreview: any;
declare let cordova: any;
declare let device: any;
declare let window: any;

@Injectable()
export class fileService {
    constructor(private servoyService: ServoyPublicService) {}

    private helperCB(cb, d) {
        if (cb) {
            this.servoyService.executeInlineScript(cb.formname, cb.script, [d]);
        }
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
                    this.helperCB(cb, JSON.parse(this.result));
                }.bind(this);
                reader.readAsText(file);
            }.bind(this), function(e) {
                this.helperCB(err, e);
            }.bind(this));
        }, function(e) {
            err(e);
        });
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
        data = JSON.stringify(data, null, '\t');

        window.resolveLocalFileSystemURL(cordova.file[dir], function(directoryEntry) {
            directoryEntry.getFile(fileName, { create: true }, function(fileEntry) {
                fileEntry.createWriter(function(fileWriter) {
                    fileWriter.onwriteend = function(e) {
                        this.helperCB(cb);
                    }.bind(this);
                    fileWriter.onerror = function(e) {
                        this.helperCB(err, e);
                    }.bind(this);
                    var blob = new Blob([data], { type: 'text/plain' });
                    fileWriter.write(blob);
                }, function(e) {
                    this.helperCB(err, e);
                }.bind(this));
            }, function(e) {
                err(e);
            });
        }, function(e) {
            err(e);
        });

    }

}