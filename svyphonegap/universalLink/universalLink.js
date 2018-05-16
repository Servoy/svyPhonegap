angular.module('svyphonegapUniversalLink', ['servoy']).factory("svyphonegapUniversalLink", function($services) {
		var scope = $services.getServiceScope('svyphonegapUniversalLink');
		return {
			/**
			 * Execute callback when universal link is called
			 * </ul>
			 *
			 * @param {String} eventName
			 * @param {Function} callbackMethod
			 *
			 */
			subscribe: function(eventName, callbackMethod) {
				Bridge.executeMethod(subscribe, null, [eventName, callbackMethod]);

				function subscribe(eventName, callbackMethod) {					
					universalLinks.subscribe(eventName,callbackMethod);
				}
			},
		}
	}).run(function($rootScope, $services) { })