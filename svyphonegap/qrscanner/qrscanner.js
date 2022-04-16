angular.module('svyphonegapQrscanner', ['servoy']).factory("svyphonegapQrscanner", function($services, $window) {
		var scope = $services.getServiceScope('svyphonegapQrscanner');
		return {
			prepare: function(onSuccessCallbackMethod, onErrorCallbackMethod) {
				var done = function(err, status) {
					if (err) {
						if(onSuccessCallbackMethod)
						$window.executeInlineScript(onErrorCallbackMethod.formname, onErrorCallbackMethod.script, [err._message]);
					} else {
						if(onErrorCallbackMethod)
						$window.executeInlineScript(onSuccessCallbackMethod.formname, onSuccessCallbackMethod.script, [status]);
					}
				};

				QRScanner.prepare(done);
			},
			useCamera: function(camera, onSuccessCallbackMethod, onErrorCallbackMethod) {
				var done = function(err, status) {
					if (err) {
						if(onSuccessCallbackMethod)
						$window.executeInlineScript(onErrorCallbackMethod.formname, onErrorCallbackMethod.script, [err._message]);
					} else {
						if(onErrorCallbackMethod)
						$window.executeInlineScript(onSuccessCallbackMethod.formname, onSuccessCallbackMethod.script, [status]);
					}
				};

				QRScanner.useCamera(camera,done);
			},
			enableLight: function(onSuccessCallbackMethod, onErrorCallbackMethod) {
				var done = function(err, status) {
					if (err) {
						if(onSuccessCallbackMethod)
						$window.executeInlineScript(onErrorCallbackMethod.formname, onErrorCallbackMethod.script, [err._message]);
					} else {
						if(onErrorCallbackMethod)
						$window.executeInlineScript(onSuccessCallbackMethod.formname, onSuccessCallbackMethod.script, [status]);
					}
				};

				QRScanner.enableLight(done);
			},
			disableLight: function(onSuccessCallbackMethod, onErrorCallbackMethod) {
				var done = function(err, status) {
					if (err) {
						if(onSuccessCallbackMethod)
						$window.executeInlineScript(onErrorCallbackMethod.formname, onErrorCallbackMethod.script, [err._message]);
					} else {
						if(onErrorCallbackMethod)
						$window.executeInlineScript(onSuccessCallbackMethod.formname, onSuccessCallbackMethod.script, [status]);
					}
				};

				QRScanner.disableLight(done);
			},

			scan: function(onSuccessCallbackMethod, onErrorCallbackMethod) {
				
				var done = function(err, text) {
					if (err) {
						if(onSuccessCallbackMethod)
						$window.executeInlineScript(onErrorCallbackMethod.formname, onErrorCallbackMethod.script, [err]);
					} else {
						if(onErrorCallbackMethod)
						$window.executeInlineScript(onSuccessCallbackMethod.formname, onSuccessCallbackMethod.script, [text]);
					}
				};

				QRScanner.scan(done);
				
			},
			cancelScan: function(onSuccessCallbackMethod) {
				var done = function(status) {
					if(onSuccessCallbackMethod)
					$window.executeInlineScript(onSuccessCallbackMethod.formname, onSuccessCallbackMethod.script, [status]);
				}
				QRScanner.cancelScan(done);
			},
			getStatus: function(onSuccessCallbackMethod) {
				var done = function(status) {
					if(onSuccessCallbackMethod)
					$window.executeInlineScript(onSuccessCallbackMethod.formname, onSuccessCallbackMethod.script, [status]);
				}
				QRScanner.getStatus(done);
			},
			show: function(onSuccessCallbackMethod) {
				var done = function(status) {
					if(onSuccessCallbackMethod)
					$window.executeInlineScript(onSuccessCallbackMethod.formname, onSuccessCallbackMethod.script, [status]);
				}
				QRScanner.show(done);
			},
			hide: function(onSuccessCallbackMethod) {
				var done = function(status) {
					if(onSuccessCallbackMethod)
					$window.executeInlineScript(onSuccessCallbackMethod.formname, onSuccessCallbackMethod.script, [status]);
				}
				QRScanner.hide(done);
			},
			destroy: function(onSuccessCallbackMethod) {
				var done = function(status) {
					if(onSuccessCallbackMethod)
					$window.executeInlineScript(onSuccessCallbackMethod.formname, onSuccessCallbackMethod.script, [status]);
				}
				QRScanner.destroy(done);
			},
			isSupported: function(callbackMethod) {
				try {
					return !!QRScanner;
				} catch (e) {
					return false;
				}
			}
		}
	}).run(function($rootScope, $services) { })