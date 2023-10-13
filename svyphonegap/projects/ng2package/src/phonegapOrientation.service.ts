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
            this.servoyService.executeInlineScript(cb.formname, cb.script, [d]);
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