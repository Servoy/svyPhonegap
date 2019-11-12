angular.module('svyphonegapPhonegapOrientation',['servoy'])
.factory("svyphonegapPhonegapOrientation",function($services) 
{
	var scope = $services.getServiceScope('svyphonegapPhonegapOrientation');
	return {
		lock: function(orientationType) {
			Bridge.executeMethod(lockOrientation, null, [orientationType]);

			function lockOrientation(type) {
				try {
					window.screen.orientation.lock(type);
				} catch (e) {
					window.alert('error locking orientation: ' + e.message);
				}
			}
		},
		unlock: function() {
			Bridge.executeMethod(unlockOrientation, null, []);

			function unlockOrientation() {
				try {
					window.screen.orientation.unlock();
				} catch (e) {
					window.alert('error unlocking orientation: ' + e.message);
				}
			}
		},
		getOrientationTypes: function() {
			return {
				PORTRAIT_PRIMARY: "portrait-primary",
				PORTRAIT_SECONDARY: "portrait-secondary",
				LANDSCAPE_PRIMARY: "landscape-primary",
				LANDSCAPE_SECONDARY: "landscape-secondary",
				PORTRAIT: "portrait",
				LANDSCAPE: "landscape",
				ANY: "any"
			};
		}
	}
})
.run(function($rootScope,$services)
{
	var scope = $services.getServiceScope('svyphonegapPhonegapOrientation')
	scope.$watch('model.onOrientationChangeCallbackMethod', function(newValue, oldValue) {
		if(oldValue){
			Bridge.executeMethod(removeOrientationEvent, null, []);
		}
		
		if(newValue){
			Bridge.executeMethod(bindOrientationEvent, null, [newValue]);
		}
		
		function bindOrientationEvent(callback) {
			window.addEventListener("orientationchange", callback);
			
			
			function removeListener() {
				window.removeEventListener("orientationchange", callback);
			}
			
			window['removeOrientationListener'] = removeListener;
		}
		
		function removeOrientationEvent() {
			if(window.removeOrientationListener){
				window.removeOrientationListener();
				delete window.removeOrientationListener;
			}
		}
	});
})