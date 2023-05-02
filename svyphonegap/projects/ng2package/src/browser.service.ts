import { Injectable } from '@angular/core';
declare let cordova: any;
declare let device: any;
declare let navigator: any;

@Injectable()
export class browserService {
    
    constructor() {}

    public openExternalLink(url: string) {
        try {
            if (device.platform === 'Android') {
                return navigator.app.loadUrl(url, { openExternal: true });
            } else {
                return window.open(url, '_system', 'location=no');
            }
        } catch (e) {
            window.alert('error opening link ' + e.message);
        }
    }

    public openHrefTag(url) {
        try {            
            if (device.platform === 'Android') {
                return cordova.InAppBrowser.open(url, '_system');
            } else {
                return window.open(url, '_system');
            }
        } catch (e) {
            window.alert('Error opening Phone Dial ' + e.message);
        }
    }

}