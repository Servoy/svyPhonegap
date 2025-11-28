angular.module('svyphonegapCamerapreview', ['servoy']).factory("svyphonegapCamerapreview", function($services, $window) {
		var scope = $services.getServiceScope('svyphonegapCamerapreview');
		return {
			startCamera: function(options, onSuccessCallbackMethod, onErrorCallbackMethod) {
				var success = function(d) {

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

					if (onSuccessCallbackMethod) {
						if (d.indexOf('base64,') != -1) {
							d = d.split('base64,')[1];
						}
						d = safeBase64Decode(d);
						$window.executeInlineScript(onSuccessCallbackMethod.formname, onSuccessCallbackMethod.script, [d]);
					}
				}

				var error = function(d) {
					if (onErrorCallbackMethod)
						$window.executeInlineScript(onErrorCallbackMethod.formname, onErrorCallbackMethod.script, [d]);
				}

				CameraPreview.startCamera(options, success, error);
			},
			setCameraOption: function(option, modeValue, onSuccessCallbackMethod, onErrorCallbackMethod) {
				var success = function(d) {
					if (onSuccessCallbackMethod)
						$window.executeInlineScript(onSuccessCallbackMethod.formname, onSuccessCallbackMethod.script, [d]);
				}

				var error = function(d) {
					if (onErrorCallbackMethod)
						$window.executeInlineScript(onErrorCallbackMethod.formname, onErrorCallbackMethod.script, [d]);
				}

				CameraPreview[option](modeValue, success, error);
			},
			show: function(onSuccessCallbackMethod, onErrorCallbackMethod) {
				var success = function(d) {
					if (onSuccessCallbackMethod)
						$window.executeInlineScript(onSuccessCallbackMethod.formname, onSuccessCallbackMethod.script, [d]);
				}

				var error = function(d) {
					if (onErrorCallbackMethod)
						$window.executeInlineScript(onErrorCallbackMethod.formname, onErrorCallbackMethod.script, [d]);
				}

				CameraPreview.show(success, error);
			},
			hide: function(onSuccessCallbackMethod, onErrorCallbackMethod) {
				var success = function(d) {
					if (onSuccessCallbackMethod)
						$window.executeInlineScript(onSuccessCallbackMethod.formname, onSuccessCallbackMethod.script, [d]);
				}

				var error = function(d) {
					if (onErrorCallbackMethod)
						$window.executeInlineScript(onErrorCallbackMethod.formname, onErrorCallbackMethod.script, [d]);
				}

				CameraPreview.hide(success, error);
			},
			stopCamera: function(onSuccessCallbackMethod, onErrorCallbackMethod) {
				var success = function(d) {
					if (onSuccessCallbackMethod)
						$window.executeInlineScript(onSuccessCallbackMethod.formname, onSuccessCallbackMethod.script, [d]);
				}

				var error = function(d) {
					if (onErrorCallbackMethod)
						$window.executeInlineScript(onErrorCallbackMethod.formname, onErrorCallbackMethod.script, [d]);
				}

				CameraPreview.stopCamera(success, error);
			},
			takePicture: function(options, onSuccessCallbackMethod, onErrorCallbackMethod) {
				var success = function(d) {
					if (onSuccessCallbackMethod)
						$window.executeInlineScript(onSuccessCallbackMethod.formname, onSuccessCallbackMethod.script, d);

				}

				var error = function(d) {
					if (onErrorCallbackMethod)
						$window.executeInlineScript(onErrorCallbackMethod.formname, onErrorCallbackMethod.script, [d]);
				}

				CameraPreview.takePicture(options, success, error);
			}
		}
	}).run(function($rootScope, $services) { })
