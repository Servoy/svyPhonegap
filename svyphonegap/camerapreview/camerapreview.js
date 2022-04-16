angular.module('svyphonegapCamerapreview', ['servoy']).factory("svyphonegapCamerapreview", function($services, $window) {
		var scope = $services.getServiceScope('svyphonegapCamerapreview');
		return {
			startCamera: function(options, onSuccessCallbackMethod, onErrorCallbackMethod) {
				var success = function(d) {
					if (onSuccessCallbackMethod)
						$window.executeInlineScript(onSuccessCallbackMethod.formname, onSuccessCallbackMethod.script, [d]);
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