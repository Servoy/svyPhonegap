import { Injectable } from '@angular/core';
import { ServoyPublicService } from '@servoy/public';
declare let CameraPreview: any;

@Injectable()
export class camerapreviewService {
    constructor(private servoyService: ServoyPublicService) {}

    private helperCB(cb, d) {
        if (cb) {            
            cb('data:image/png;base64,'+d[0]);
        }
    }

    startCamera(options, onSuccessCallbackMethod, onErrorCallbackMethod) {
        CameraPreview.startCamera(options, function(d) { this.helperCB(onSuccessCallbackMethod, d); }.bind(this), function(d) { this.helperCB(onErrorCallbackMethod, d); }.bind(this));
    } 

    setCameraOption(option, modeValue, onSuccessCallbackMethod, onErrorCallbackMethod) {
        CameraPreview[option](modeValue, function(d) { this.helperCB(onSuccessCallbackMethod, d); }.bind(this), function(d) { this.helperCB(onErrorCallbackMethod, d); }.bind(this));
    }

    show(onSuccessCallbackMethod, onErrorCallbackMethod) {
        CameraPreview.show(function(d) { this.helperCB(onSuccessCallbackMethod, d); }.bind(this), function(d) { this.helperCB(onErrorCallbackMethod, d); }.bind(this));
    }

    hide(onSuccessCallbackMethod, onErrorCallbackMethod) {
        CameraPreview.hide(function(d) { this.helperCB(onSuccessCallbackMethod, d); }.bind(this), function(d) { this.helperCB(onErrorCallbackMethod, d); }.bind(this));
    }

    stopCamera(onSuccessCallbackMethod, onErrorCallbackMethod) {
        CameraPreview.stopCamera(function(d) { this.helperCB(onSuccessCallbackMethod, d); }.bind(this), function(d) { this.helperCB(onErrorCallbackMethod, d); }.bind(this));
    }

    takePicture(options, onSuccessCallbackMethod, onErrorCallbackMethod) {        
        CameraPreview.takePicture(options, function(d) { this.helperCB(onSuccessCallbackMethod, d); }.bind(this), function(d) { this.helperCB(onErrorCallbackMethod, d); }.bind(this));
    }

}