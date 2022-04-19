angular.module('pgutilDevicechk', ['servoy']).factory("pgutilDevicechk", function($services) {
		var scope = $services.getServiceScope('pgutilDevicechk');
		return {
			isiPadOS: function() {
				const iPad = (navigator.userAgent.match(/(iPad)/)/* iOS pre 13 */ || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) /* iPad OS 13+ */);
				return iPad;
			}
		}
	}).run(function($rootScope, $services) { })