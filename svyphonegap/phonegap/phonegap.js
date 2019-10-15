angular.module('svyphonegapPhonegap', ['servoy']).factory("svyphonegapPhonegap", function($services) {
		var scope = $services.getServiceScope('svyphonegapPhonegap');
		return {
			executeScript: function(script, scriptArgs, callbackMethod) {
				Bridge.executeMethod(executeScript, null, [callbackMethod, script, scriptArgs]);

				function executeScript(script, scriptArgs) {
					var mArgs = scriptArgs;
					if (!Array.isArray(scriptArgs)) {
						mArgs = [scriptArgs]
					}
					var f = eval(script);
					return f.apply(this, mArgs);
				}
			},
			setOnResumeMethod: function(callback) {
				Bridge.executeMethod(setOnResumeMethod, null, [callback]);

				function setOnResumeMethod(callback) {
					try {
						Servoy.setResumeMethod(callback);
					} catch (e) {
						console.error('Error : ' + e.message)
					}
				}
			},
			setOnPauseMethod: function(callback) {
				Bridge.executeMethod(setOnPauseMethod, null, [callback]);

				function setOnPauseMethod(callback) {
					try {
						Servoy.setPauseMethod(callback);
					} catch (e) {
						console.error('Error :' + e.message)
					}
				}
			},
			setOnBackMethod: function(callback) {
				Bridge.executeMethod(setOnBackMethod, null, [callback]);

				function setOnBackMethod(callback) {
					try {
						Servoy.setBackMethod(callback);
					} catch (e) {
						console.error('Error :' + e.message)
					}
				}
			},
			exit: function(callback) {
				Bridge.executeMethod(exit, null, []);

				function exit() {
					try {
						if (navigator.app)
						{ navigator.app.exitApp(); }

						else if (navigator.device)
						{ navigator.device.exitApp(); }

						else
						{ window.close(); } 
					} catch (e) {
						console.error('Error : ' + e.message)
					}
				}
			}
		}
	}).run(function($rootScope, $services) {
	var scope = $services.getServiceScope('svyphonegapPhonegap')

	//initialize phonegap bridge

	Bridge.init();

})