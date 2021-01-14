angular.module('svyphonegapPrinter', ['servoy']).factory("svyphonegapPrinter", function($services, $window) {
		var scope = $services.getServiceScope('svyphonegapPrinter');
		return {
			print: function(content, options, cb) {
				cordova.plugins.printer.print(content, options, function(r) {
						$window.executeInlineScript(cb.formname, cb.script, [r]);
					});
			},
			pick: function(options, cb) {
				cordova.plugins.printer.pick(options, function(r) {
						$window.executeInlineScript(cb.formname, cb.script, [r]);
					});
			}
		}
	}).run(function($rootScope, $services) { })