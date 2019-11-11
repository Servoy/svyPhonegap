angular.module('svyphonegapCamera', ['servoy']).factory("svyphonegapCamera", function($services, $window) {
		var scope = $services.getServiceScope('svyphonegapCamera');
		return {
			getPicture: function(cb, err, options) {
				if (!options) {
					options = {
						quality: 50,
						destinationType: Camera.DestinationType.DATA_URL,
						sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
						correctOrientation: true
					}
				}
				navigator.camera.getPicture(function(res) {
						$window.executeInlineScript(cb.formname, cb.script, [res]);
					}, function(err) {
						$window.executeInlineScript(err.formname, err.script, [err]);
					}, options);

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