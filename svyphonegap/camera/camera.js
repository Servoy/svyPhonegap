angular.module('svyphonegapCamera', ['servoy']).factory("svyphonegapCamera", function($services) {
		var scope = $services.getServiceScope('svyphonegapCamera');
		return {
			getPicture: function(successCallback, errorCallback, options) {				
				Bridge.executeMethod(getPicture, null, [successCallback, errorCallback, options]);

				function getPicture(successCallback, errorCallback, options) {
					if (!options) {
						options = {
							quality: 50,
							destinationType: Camera.DestinationType.DATA_URL,
							sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
							correctOrientation: true
						}
					}					
					navigator.camera.getPicture(successCallback, errorCallback, options);
				}
			},
			isSupported: function(callbackMethod) {
				Bridge.executeMethod(isSupported, callbackMethod);

				function isSupported() {
					return !!window.Notification;
				}

				function callback(result) {
					alert('Is supported: ' + result);
				}
			}

		}
	}).run(function($rootScope, $services) { })