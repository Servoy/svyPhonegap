import { Injectable } from '@angular/core';
import { ServoyPublicService } from '@servoy/public';
declare let navigator: any;
declare let App: any;
declare let watchID: any;


@Injectable()
export class locationService {
    constructor(private servoyService: ServoyPublicService) {}

    private helperCB(cb, d) {
        if (cb) {          
            cb(d);
        }
    }

    /**
     * Returns the device's current position to the successCallback function with a <br>Position object as the parameter. If there is an error, the errorCallback callback is passed a PositionError object. <br>Possible options are<br><ul>
     * <li>enableHighAccuracy: Provides a hint that the application needs the best possible results. By default, the device attempts to retrieve a Position using network-based methods. Setting this property to true tells the framework to use more accurate methods, such as satellite positioning.</li>
     * <li>timeout: The maximum length of time (milliseconds) that is allowed to pass from the call to getCurrentPosition or watchPosition until the corresponding geolocationSuccess callback executes. If the geolocationSuccess callback is not invoked within this time, the geolocationError callback is passed a PositionError.TIMEOUT error code. (Note that when used in conjunction with watchPosition, the geolocationError callback could be called on an interval every timeout milliseconds!)</li>
     * <li>maximumAge: Accept a cached position whose age is no greater than the specified time in milliseconds.</li>
     * </ul>
     *
     * @param {Function} successCallback 
     * @param {Function} errorCallback
     * @param {{maximumAge: Number, timeout: Number, enableHighAccuracy: Boolean}} [options]
     *
     */
    getCurrentPosition(successCallback, errorCallback, options) {

        try {
            navigator.geolocation.getCurrentPosition(function(data) {
                this.helperCB(successCallback, App.cloneAsObject(data));
            }.bind(this), function(err) {
                this.helperCB(errorCallback, App.cloneAsObject(err));
            }.bind(this), options);
        } catch (e) {
            window.alert('error getting geolocation: ' + e.message);
        }

    }

    /**
     * Add a watcher to keep track of the GPS position. As the device moves the watcher <br> will send this information back to the successCallback callback with a Position object as the parameter. If there is an error, the errorCallback function is passed a PositionError object. <br>Possible options are<br><ul>
     * <li>enableHighAccuracy: Provides a hint that the application needs the best possible results. By default, the device attempts to retrieve a Position using network-based methods. Setting this property to true tells the framework to use more accurate methods, such as satellite positioning.</li>
     * <li>timeout: The maximum length of time (milliseconds) that is allowed to pass from the call to getCurrentPosition or watchPosition until the corresponding geolocationSuccess callback executes. If the geolocationSuccess callback is not invoked within this time, the geolocationError callback is passed a PositionError.TIMEOUT error code. (Note that when used in conjunction with watchPosition, the geolocationError callback could be called on an interval every timeout milliseconds!)</li>
     * <li>maximumAge: Accept a cached position whose age is no greater than the specified time in milliseconds.</li>
     * </ul>
     *
     * @param {Function} successCallback
     * @param {Function} errorCallback
     * @param {{maximumAge: Number, timeout: Number, enableHighAccuracy: Boolean}} [options]
     *
     */
    watchPosition(successCallback, errorCallback, options) {
        try {
            watchID = navigator.geolocation.watchPosition(function(res) {
                this.helperCB(successCallback, App.cloneAsObject(res), watchID);
            }.bind(this), function(err) {
                this.helperCB(errorCallback, App.cloneAsObject(err));
            }.bind(this), options);
        } catch (e) {
            window.alert('error watching position: ' + e.message);
        }
    }

    /**
     * Remove an existing watcher which will disable tracking of location.
     * @param {Number} watchId
     *
     */
    clearWatch(watchId) {
        return navigator.geolocation.clearWatch(watchId);
    }

}