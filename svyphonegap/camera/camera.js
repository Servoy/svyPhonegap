angular.module('svyphonegapCamera', ['servoy']).factory("svyphonegapCamera", function($services, $window) {
		var scope = $services.getServiceScope('svyphonegapCamera');
		return {
			getPicture: function(cb, errcb, options) {
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
						$window.executeInlineScript(errcb.formname, errcb.script, [err]);
					}, options);

			},
			isSupported: function(callbackMethod) {				
					return !!navigator.camera;				
			}

		}
	}).run(function($rootScope, $services) { })