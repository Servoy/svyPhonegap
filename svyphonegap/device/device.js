angular.module('svyphonegapDevice', ['servoy']).factory("svyphonegapDevice", function($services) {
		var scope = $services.getServiceScope('svyphonegapDevice');
		return {
			getDeviceInfoProperty: function(propertyName) {
				try {
					return device[propertyName];
				} catch (e) {
					console.error('error getting device info: ' + e.message);
				}
			},

			getDeviceInfo: function() {
				try {
					var props = ["cordova", "version", "platform", "model", "uuid"];
					var result = { };
					for (var i = 0; i < props.length; i++) {
						result[props[i]] = device[props[i]];
					}
					return [result];
				} catch (e) {
					console.error('error getting device info: ' + e.message);
				}
			}
		}
	}).run(function($rootScope, $services) { })