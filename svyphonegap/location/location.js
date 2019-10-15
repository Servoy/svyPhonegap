angular.module('svyphonegapLocation', ['servoy']).factory("svyphonegapLocation", function($services,$window) {
		var scope = $services.getServiceScope('svyphonegapLocation');
		return {

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
			getCurrentPosition: function(successCallback, errorCallback, options) {				
				Bridge.executeMethod(getCurrentPosition, null, [successCallback, errorCallback, options]);

				function getCurrentPosition(onSuccess, onError, options) {
					try {
						return navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
					} catch (e) {
						window.alert('error getting geolocation: ' + e.message);
					}
				}
			},
			/**
			 * Add a watcher to keep track of the GPS position. As the device moves the watcher <br> will send this information back to the successCallback callback with a Position object as the parameter. If there is an error, the errorCallback function is passed a PositionError object. <br>Possible options are<br><ul>
			 * <li>enableHighAccuracy: Provides a hint that the application needs the best possible results. By default, the device attempts to retrieve a Position using network-based methods. Setting this property to true tells the framework to use more accurate methods, such as satellite positioning.</li>
			 * <li>timeout: The maximum length of time (milliseconds) that is allowed to pass from the call to getCurrentPosition or watchPosition until the corresponding geolocationSuccess callback executes. If the geolocationSuccess callback is not invoked within this time, the geolocationError callback is passed a PositionError.TIMEOUT error code. (Note that when used in conjunction with watchPosition, the geolocationError callback could be called on an interval every timeout milliseconds!)</li>
			 * <li>maximumAge: Accept a cached position whose age is no greater than the specified time in milliseconds.</li>
			 * </ul>
			 *
			 * @param {Function} onWatchSetCallback
			 * @param {Function} successCallback
			 * @param {Function} errorCallback
			 * @param {{maximumAge: Number, timeout: Number, enableHighAccuracy: Boolean}} [options]
			 *
			 */
			watchPosition: function(onWatchSetCallback, successCallback, errorCallback, options) {
				Bridge.executeMethod(watchPosition, onWatchSetCallback, [successCallback, errorCallback, options]);

				function watchPosition(onSuccess, onError, options) {
					try {
						Servoy.currentWatchID = navigator.geolocation.watchPosition(onSuccess, onError, options);	
						console.log(Servoy.currentWatchID)
						return;
					} catch (e) {
						window.alert('error calling watchPosition: ' + e.message);
					}
				}							
				
			},
			/**
			 * Remove an existing watcher which will disable tracking of location.	
//			 * @param {Number} watchId
			 *
			 */
			clearWatch: function(watchId) {
				Bridge.executeMethod(watchPosition, [watchId]);

				function watchPosition(watchId) {
					try {						
						if (!watchId) watchId = Servoy.currentWatchID;
						if (!watchId) return;
						console.log(watchId);
						return navigator.geolocation.clearWatch(watchId);
					} catch (e) {
						window.alert('error calling clearWatch: ' + e.message);
					}
				}
			},
			isSupported: function(callbackMethod) {
				Bridge.executeMethod(isSupported, callbackMethod);

				function isSupported() {
					try {
						return !!navigator.geolocation;
					} catch (e) {
						return false;
					}
				}

				function callback(result) {
					alert('Is supported: ' + result);
				}
			}

		}
	}).run(function($rootScope, $services) { })