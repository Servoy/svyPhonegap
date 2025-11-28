import { Injectable } from '@angular/core';
import { ServoyPublicService } from '@servoy/public';
declare let CameraPreview: any;

@Injectable()
export class camerapreviewService {
    constructor(private servoyService: ServoyPublicService) {}


    private helperCB(cb, d) {
      function safeBase64Decode(input) {
							if (!input || typeof input !== "string") return null;

							// 1. Clean: remove whitespace & convert URL-safe chars
							var cleaned = input.replace(/[\r\n\t ]+/g, "")// remove whitespace
							.replace(/-/g, "+")// URL-safe fix
							.replace(/_/g, "/"); // URL-safe fix

							// 2. Padding: Base64 length must be divisible by 4
							var padNeeded = cleaned.length % 4;
							if (padNeeded > 0) {
								cleaned += "===".substring(padNeeded);
							}
							return cleaned;
						}

      if (cb) {
        if (d.indexOf('base64,') != -1) {
          d = d.split('base64,')[1];
        }
        d = safeBase64Decode(d);
        cb(d);
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
