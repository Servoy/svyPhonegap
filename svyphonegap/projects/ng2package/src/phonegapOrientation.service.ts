import { Injectable } from '@angular/core';
import { ServoyPublicService } from '@servoy/public';
declare let window: any;

@Injectable()
export class phonegapOrientationService {

    private onOrientationChangeCallbackMethod;

    constructor(private servoyService: ServoyPublicService) {
        window.addEventListener("orientationchange", function() {
            this.helperCB(this.onOrientationChangeCallbackMethod);
        }.bind(this));
    }
 
    private helperCB(cb, d) {
        if (cb) {
            cb(d);
        }
    }

    lock(orientationType) {
        try {
            if (window.cordova.plugins.screenorientation) {
						window.cordova.plugins.screenorientation.setOrientation(orientationType);
			} else {
				window.screen.orientation.lock(orientationType);
			}
        } catch (e) {
            window.alert('error locking orientation: ' + e.message);
        }
    }
    unlock() {
        try {
			 if (window.cordova.plugins.screenorientation) {
				 window.cordova.plugins.screenorientation.setOrientation('any');
			 } else {
				window.screen.orientation.unlock();		 
			 }
            
        } catch (e) {
            window.alert('error unlocking orientation: ' + e.message);
        }
    }
    /**
     * Returns the current screen orientation as a string.
     * The value is one of the constants returned by getOrientationTypes()
     * ('portrait-primary', 'portrait-secondary', 'landscape-primary' or 'landscape-secondary').
     */
    getScreenOrientation() {
        let orientation = 'portrait-primary';
        try {
            if (screen.orientation && screen.orientation.type) {
                orientation = screen.orientation.type;
            }
        } catch (e) {
            window.alert('error getting orientation: ' + e.message);
        }
        return orientation;
    }
    /**
     * Returns the current screen orientation angle in degrees, clockwise from the
     * natural orientation: 0, 90, 180 or -90.
     */
    getScreenOrientationAngle() {
        let angle = 0;
        try {
            if (screen.orientation) {
                angle = Number(screen.orientation.angle) || 0;
            }
        } catch (e) {
            window.alert('error getting orientation: ' + e.message);
        }
        return angle;
    }
    getOrientationTypes() {
        return {
            PORTRAIT_PRIMARY: "portrait-primary",
            PORTRAIT_SECONDARY: "portrait-secondary",
            LANDSCAPE_PRIMARY: "landscape-primary",
            LANDSCAPE_SECONDARY: "landscape-secondary",
            PORTRAIT: "portrait",
            LANDSCAPE: "landscape",
            ANY: "any"
        };
    }
    setOrientationChangeCallback(cb) {
        this.onOrientationChangeCallbackMethod = cb;
    }

}