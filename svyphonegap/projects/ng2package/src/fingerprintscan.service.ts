import { Injectable } from '@angular/core';
import { ServoyPublicService } from '@servoy/public';
declare let Fingerprint: any;

@Injectable()
export class fingerprintscanService {
    constructor(private servoyService: ServoyPublicService) {}
    
    private helperCB(cb, d) {
        if (cb) {          
            cb(d);
        }
    }

    /**
     * Check if fingerprint authentication is available
     *
     * @param {Function} [isAvailableSuccess] Result will depends on device and OS. <br> iPhone X will return 'face' other Android or iOS devices will return 'finger'
     * @param {Function} [isAvailableError]
     *
     */
    isAvailable(isAvailableSuccess, isAvailableError) {
        Fingerprint.isAvailable(function(data) {
            this.helperCB(isAvailableSuccess, data);
        }.bind(this), function(err) {
            this.helperCB(isAvailableError, err);
        }.bind(this));
    }

    /**
     * Show authentication dialogue
     * 
     * @param {{clientId: String, clientSecret: String}} config configuration for fingerprint, clientSecret only needed for Android
     * @param {Function} [successCallback]
     * @param {Function} [errorCallback]
     *
     */
    show(config, successCallback, errorCallback) {

        Fingerprint.show(config, function(data) {
            this.helperCB(successCallback, data);
        }.bind(this), function(err) {
            this.helperCB(errorCallback, err);
        }.bind(this));
    }

    /**
     * Register a biometric secret in vault
     * 
     * @param {{description: String, secret: String, invalidateOnEnrollment: boolean, disableBackup: boolean}} config for storing secret, disableBackup always disabled on Android
     * @param {Function} [successCallback]
     * @param {Function} [errorCallback]
     *
     */
    registerSecret(config, successCallback, errorCallback) {

        Fingerprint.registerBiometricSecret(config, function(data) {
            this.helperCB(successCallback, data);
        }.bind(this), function(err) {
            this.helperCB(errorCallback, err);
        }.bind(this));

    }

    /**
     * Load a biometric secret from the vault
     * 
     * @param {{description: String, disableBackup: boolean}} config for loading secret, disableBackup always disabled on Android
     * @param {Function} [successCallback]
     * @param {Function} [errorCallback]
     *
     */
    loadSecret(config, successCallback, errorCallback) {

        Fingerprint.loadBiometricSecret(config, function(data) {
            this.helperCB(successCallback, data);
        }.bind(this), function(err) {
            this.helperCB(errorCallback, err);
        }.bind(this));
    }

}