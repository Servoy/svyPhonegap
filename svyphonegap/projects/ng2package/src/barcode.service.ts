import { Injectable } from '@angular/core';
import { ServoyPublicService } from '@servoy/public';
declare let cordova: any;

@Injectable()
export class barcodeService {

    constructor(private servoyService: ServoyPublicService) {}

    private helperCB(cb, d) {
        if (cb) {          
            cb(d);
        }
    }

    public scan(successCallback, errorCallback, options) {
        try {
            cordova.plugins.barcodeScanner.scan(function(data) {
                this.helperCB(successCallback, data);
            }.bind(this), function(err) {
                this.helperCB(errorCallback, err);                
            }.bind(this));
        } catch (e) {
            console.error('Error scanning barcode: ' + e.message)
        }
    }

    public isSupported() {
        try {
            return !!cordova.plugins.barcodeScanner;
        } catch (e) {
            return false;
        }
    }

}