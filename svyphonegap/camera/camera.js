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

						function safeBase64Decode(input) {
							if (!input || typeof input !== "string") return null;

							// 1. Clean: remove whitespace & convert URL-safe chars
							var cleaned = input.replace(/[\r\n\t ]+/g, "")// remove whitespace
							.replace(/-/g, "+")// URL-safe fix
							.replace(/_/g, "/"); // URL-safe fix

							// 2. Padding: Base64 length must be divisible by 4
							var padNeeded = cleaned.length % 4;
							if (padNeeded > 0) {
								cleaned += "===".substring(padNeeded);
							}
							return cleaned;
						}

						if (res.indexOf('base64,') != -1) {
							res = res.split('base64,')[1];
						}
						res = safeBase64Decode(res);
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
