angular.module('svyphonegapPhonegapOrientation',['servoy'])
.factory("svyphonegapPhonegapOrientation",function($services) 
{
	var scope = $services.getServiceScope('svyphonegapPhonegapOrientation');
	return {
		lock: function(orientationType) {
				try {
					if (window.cordova.plugins.screenorientation) {
						window.cordova.plugins.screenorientation.setOrientation(orientationType);
					} else {
						window.screen.orientation.lock(orientationType);
					}
					
				} catch (e) {
					window.alert('error locking orientation: ' + e.message);
				}			
		},
		unlock: function() {		
				try {
					if (window.cordova.plugins.screenorientation) {
						window.cordova.plugins.screenorientation.setOrientation('any');
					} else {
						window.screen.orientation.unlock();
					}
				} catch (e) {
					window.alert('error unlocking orientation: ' + e.message);
				}			
		},
		/**
		 * Returns the current screen orientation as a string.
		 * The value is one of the constants returned by {@link getOrientationTypes}
		 * ('portrait-primary', 'portrait-secondary', 'landscape-primary' or 'landscape-secondary').
		 *
		 * @return {String} The current screen orientation; defaults to 'portrait-primary' if unavailable.
		 */
		getScreenOrientation: function() {
			var orientation = 'portrait-primary';
			try {
				if (screen.orientation && screen.orientation.type) {
					orientation = screen.orientation.type;
				}
			} catch (e) {
				window.alert('error getting orientation: ' + e.message);
			}
			return orientation;
		},
		/**
		 * Returns the current screen orientation angle in degrees, clockwise from the
		 * natural orientation: 0, 90, 180 or -90.
		 *
		 * @return {Number} The current screen orientation angle; defaults to 0 if unavailable.
		 */
		getScreenOrientationAngle: function() {
			var angle = 0;
			try {
				if (screen.orientation) {
					angle = Number(screen.orientation.angle) || 0;
				}
			} catch (e) {
				window.alert('error getting orientation: ' + e.message);
			}
			return angle;
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
		},
		setOrientationChangeCallback: function(cb) {
			return 'For use with Titanium client only'
		}
	}
})
.run(function($rootScope,$services)
{
	var scope = $services.getServiceScope('svyphonegapPhonegapOrientation')
	scope.$watch('model.onOrientationChangeCallbackMethod', function(newValue, oldValue) {
		if(oldValue){			
			removeOrientationEvent()
		}
		
		if(newValue){			
			bindOrientationEvent(newValue);
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