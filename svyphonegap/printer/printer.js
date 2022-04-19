angular.module('svyphonegapPrinter', ['servoy']).factory("svyphonegapPrinter", function($services, $window) {
		var scope = $services.getServiceScope('svyphonegapPrinter');
		return {
			print: function(content, options, cb) {				
				cordova.plugins.printer.print(content, options, function(r) {
						$window.executeInlineScript(cb.formname, cb.script, [r]);
					});
			},

			printPDF: function(content, cb) {				
				window.plugins.PrintPDF.print({
					data: content,
					type: 'Data',
					title: 'PDF Print',
					success: function() {
						$window.executeInlineScript(cb.formname, cb.script, ['success']);
					},
					error: function(data) {
						data = JSON.parse(data);
						$window.executeInlineScript(cb.formname, cb.script, ['failed: ' + data.error]);
					}
				});
			
			},

			pick: function(options, cb) {
				cordova.plugins.printer.pick(options, function(r) {
						$window.executeInlineScript(cb.formname, cb.script, [r]);
					});
			}
		}
	}).run(function($rootScope, $services) { })