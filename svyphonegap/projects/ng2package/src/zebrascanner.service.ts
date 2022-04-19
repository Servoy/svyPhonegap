import { Injectable } from '@angular/core';
import { ServoyPublicService } from '@servoy/public';
declare let zebraBarcodePlugin: any;

@Injectable()
export class zebrascannerService {

    constructor(private servoyService: ServoyPublicService) {}

     private helperCB(cb, d) {
        if (cb) {
            this.servoyService.executeInlineScript(cb.formname, cb.script, [d]);
        }
    }

    startHardKeyRead(successCallback, errorCallback, wait) {
        try {
            if (!wait) wait = 0;
            setTimeout(function() {
                zebraBarcodePlugin.startHardKeyRead(function(data) {
                    this.helperCB(successCallback, [data]);
                }.bind(this), function(err) {
                    this.helperCB(errorCallback, [err]);
                }.bind(this));
            }.bind(this), wait);

        } catch (e) {
            console.error('Error scanning barcode: ' + e.message)
        }
    }

    startSoftKeyRead(successCallback, errorCallback, wait) {
        try {
            if (!wait) wait = 0;
            setTimeout(function() {
                zebraBarcodePlugin.startSoftKeyRead(function(data) {
                    this.helperCB(successCallback, [data]);
                }.bind(this), function(err) {
                    this.helperCB(errorCallback, [err]);
                }.bind(this));
            }.bind(this), wait);
        } catch (e) {
            console.error('Error scanning barcode: ' + e.message)
        }
    }
    init() {
        try {
            zebraBarcodePlugin.init();
        } catch (e) {
            console.error('Error failed to init: ' + e.message)
        }
    }
    reinit() {
        try {
            zebraBarcodePlugin.reinit();
        } catch (e) {
            console.error('Error failed to reinit: ' + e.message)
        }
    }
    deinit() {
        try {
            zebraBarcodePlugin.deinit();
        } catch (e) {
            console.error('Error failed to deinit: ' + e.message)
        }
    }
    stopReading() {
        try {
            zebraBarcodePlugin.stopReading();
        } catch (e) {
            console.error('Error stop reading: ' + e.message)
        }
    }

    isSupported() {
        if (typeof zebraBarcodePlugin == 'undefined') return false;
        return true;
    }

}