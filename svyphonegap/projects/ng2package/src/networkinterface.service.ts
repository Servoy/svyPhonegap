import { Injectable } from '@angular/core';
import { ServoyPublicService } from '@servoy/public';
declare let networkinterface: any;
declare let Servoy: any;


@Injectable()
export class networkinterfaceService {
    constructor(private servoyService: ServoyPublicService) {}
    
    private helperCB(cb, d) {
        if (cb) {          
            this.servoyService.executeInlineScript(cb.formname, cb.script, [d]);
        }
    }

    /**
     * Get WIFI IP Address
     * </ul>
     *
     * @param {Function} successCallback
     * @param {Function} errorCallback
     *
     */
    getWiFiIPAddress(successCallback, errorCallback) {
        networkinterface.getWiFiIPAddress(function(res) {
            this.helperCB(successCallback, [res, Servoy.watchID]);
        }.bind(this), function(err) {
            this.helperCB(errorCallback, [err]);
        }.bind(this));

    }

    /**
     * Get Carrier IP Address
     * </ul>
     *
     * @param {Function} successCallback
     * @param {Function} errorCallback
     *
     */
    getCarrierIPAddress(successCallback, errorCallback) {
        networkinterface.getCarrierIPAddress(function(res) {
            this.helperCB(successCallback, [res, Servoy.watchID]);
        }.bind(this), function(err) {
            this.helperCB(errorCallback, [err]);
        }.bind(this));
    }

    /**
     * Get Proxy Information for a URL.
     * </ul>
     *
     * @param {String} url
     * @param {Function} successCallback
     * @param {Function} errorCallback
     *
     */
    getHttpProxyInformation(url, successCallback, errorCallback) {
        networkinterface.getHttpProxyInformation(url, function(res) {
            this.helperCB(successCallback, [res, Servoy.watchID]);
        }.bind(this), function(err) {
            this.helperCB(errorCallback, [err]);
        }.bind(this));
    }

}