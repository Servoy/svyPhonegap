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

	//push 'main' state into history.
	window.history.pushState('main', '');

	scope.$watch('model.onBackCallbackMethod', function(newValue, oldValue) {
			if (newValue) {
				window.onpopstate = function(event) {
					if (!event.state) {
						history.forward();
						$window.executeInlineScript(newValue.formname, newValue.script);
					}
				}

				//bind back button
				return Bridge.executeMethod(bindBackEvent, [newValue]);

				function bindBackEvent() {
					window.onhashchange = function() {
						alert('back button pushed!');
					}
				}
			}
		});
})