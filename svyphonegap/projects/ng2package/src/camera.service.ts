import { Injectable } from '@angular/core';
import { ServoyPublicService } from '@servoy/public';
declare let cordova: any;
declare let device: any;
declare let Camera: any;
declare let navigator: any;

@Injectable()
export class cameraService {
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

    public getPicture(cb, errcb, options) {
        if (!options) {
            options = {
                quality: 50,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                correctOrientation: true
            }
        }
        navigator.camera.getPicture(function(res) {
            this.helperCB(cb, res);
        }.bind(this), function(err) {
            this.helperCB(errcb, err);
        }.bind(this), options);

    }

    public isSupported() {
        return !!navigator.camera;
    }
}
