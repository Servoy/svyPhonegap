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
        if (cb) {
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