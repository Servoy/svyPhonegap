angular.module('svyphonegapMagcard',['servoy'])
.factory("svyphonegapMagcard",function($services) 
{
	var scope = $services.getServiceScope('svyphonegapMagcard');
	return {
		start: function(s,e) {
			window.plugins.CardRaderPlugin.start(
				function(r){$window.executeInlineScript(s.formname, s.script, [r]);}, 
				function(r){$window.executeInlineScript(e.formname, e.script, [r]);}
				);},
		stop: function(s,e) {
			window.plugins.CardRaderPlugin.start(
				function(r){$window.executeInlineScript(s.formname, s.script, [r]);}, 
				function(r){$window.executeInlineScript(e.formname, e.script, [r]);}
				);}
	}
})
.run(function($rootScope,$services){})