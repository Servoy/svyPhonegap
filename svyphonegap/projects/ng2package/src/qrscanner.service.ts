import { Injectable } from '@angular/core';
import { ServoyPublicService } from '@servoy/public';
declare let QRScanner: any;

@Injectable()
export class qrscannerService {
    constructor(private servoyService: ServoyPublicService) {}

    private helperCB(cb, d) {
        if (cb) {
            this.servoyService.executeInlineScript(cb.formname, cb.script, [d]);
        }
    }

    prepare(onSuccessCallbackMethod, onErrorCallbackMethod) {
        QRScanner.prepare(function(err, status) {
            if (err) {
                this.helperCB(onErrorCallbackMethod, [err._message]);
            } else {
                this.helperCB(onSuccessCallbackMethod, [status]);
            }
        }.bind(this));
    }
    useCamera(camera, onSuccessCallbackMethod, onErrorCallbackMethod) {
        QRScanner.useCamera(camera, function(err, status) {
            if (err) {
                this.helperCB(onErrorCallbackMethod, [err._message]);
            } else {
                this.helperCB(onSuccessCallbackMethod, [status]);
            }
        }.bind(this));
    }
    enableLight(onSuccessCallbackMethod, onErrorCallbackMethod) {
        QRScanner.enableLight(function(err, status) {
            if (err) {
                this.helperCB(onErrorCallbackMethod, [err._message]);
            } else {
                this.helperCB(onSuccessCallbackMethod, [status]);
            }
        }.bind(this));
    }
    disableLight(onSuccessCallbackMethod, onErrorCallbackMethod) {
        QRScanner.disableLight(function(err, status) {
            if (err) {
                this.helperCB(onErrorCallbackMethod, [err._message]);
            } else {
                this.helperCB(onSuccessCallbackMethod, [status]);
            }
        }.bind(this));
    }

    scan(onSuccessCallbackMethod, onErrorCallbackMethod) {
        QRScanner.scan(function(err, status) {
            if (err) {
                this.helperCB(onErrorCallbackMethod, [err]);
            } else {
                this.helperCB(onSuccessCallbackMethod, [status]);
            }
        }.bind(this));
    }
    cancelScan(onSuccessCallbackMethod) {
        QRScanner.cancelScan(function(err, status) {
            this.helperCB(onSuccessCallbackMethod, [status]);
        }.bind(this));
    }
    getStatus(onSuccessCallbackMethod) {
        QRScanner.getStatus(function(err, status) {
            this.helperCB(onSuccessCallbackMethod, [status]);
        }.bind(this));
    }
    show(onSuccessCallbackMethod) {
        QRScanner.show(function(err, status) {
            this.helperCB(onSuccessCallbackMethod, [status]);
        }.bind(this));
    }
    hide(onSuccessCallbackMethod) {
        var done = function(err, status) {
            this.helperCB(onSuccessCallbackMethod, [status]);
        };
        QRScanner.hide(done);
    }
    destroy(onSuccessCallbackMethod) {
        QRScanner.destroy(function(err, status) {
            this.helperCB(onSuccessCallbackMethod, [status]);
        }.bind(this));
    }
    isSupported() {
        try {
            return !!QRScanner;
        } catch (e) {
            return false;
        }
    }

}