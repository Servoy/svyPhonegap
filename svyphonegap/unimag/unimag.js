angular.module('svyphonegapUnimag',['servoy'])
.factory("svyphonegapUnimag",function($services,$window) 
{
	var scope = $services.getServiceScope('svyphonegapUnimag');
	return {
		getReaderTypes: function() {
			return cordova.plugins.unimag.swiper.getReaderType();
		},
		onSwipe: function(ct,cd,dd,to,sp,ss,se,ce,xe,ac,ae) {
			cordova.plugins.unimag.swiper.on('connecting',function(){$window.executeInlineScript(ct.formname, ct.script, []);});
			cordova.plugins.unimag.swiper.on('connected',function(){$window.executeInlineScript(cd.formname, cd.script, []);});
			cordova.plugins.unimag.swiper.on('disconnected',function(){$window.executeInlineScript(dd.formname, dd.script, []);});
			cordova.plugins.unimag.swiper.on('timeout',function(r){$window.executeInlineScript(to.formname, to.script, [r]);});
			
			cordova.plugins.unimag.swiper.on('swipe_processing',function(){$window.executeInlineScript(sp.formname, sp.script, []);});
			cordova.plugins.unimag.swiper.on('swipe_success',function(r){$window.executeInlineScript(ss.formname, ss.script, [r]);});
			cordova.plugins.unimag.swiper.on('swipe_error',function(){$window.executeInlineScript(se.formname, se.script, []);});
			
			cordova.plugins.unimag.swiper.on('connection_error',function(r){$window.executeInlineScript(ce.formname, ce.script, [r]);});
			cordova.plugins.unimag.swiper.on('xml_error',function(r){$window.executeInlineScript(xe.formname, xe.script, [r]);});
			cordova.plugins.unimag.swiper.on('autoconfig_completed',function(){$window.executeInlineScript(ac.formname, ac.script, []);});
			cordova.plugins.unimag.swiper.on('autoconfig_error',function(r){$window.executeInlineScript(ae.formname, ae.script, [r]);});
			
		},		
		fireEvent: function(event,data) {
			return cordova.plugins.unimag.swiper.fireEvent(event,data)},
		autoConfig: function(s,e) {
			 cordova.plugins.unimag.swiper.autoConfig(
				function(r){$window.executeInlineScript(s.formname, s.script, [r]);}, 
				function(r){$window.executeInlineScript(e.formname, e.script, [r]);}
				);},
		swipe: function(s,e) {
			 cordova.plugins.unimag.swiper.swipe(
				function(r){$window.executeInlineScript(s.formname, s.script, [r]);}, 
				function(r){$window.executeInlineScript(e.formname, e.script, [r]);}
				);},
		deactivate: function(s,e) {
			 cordova.plugins.unimag.swiper.deactivate(
				function(r){$window.executeInlineScript(s.formname, s.script, [r]);}, 
				function(r){$window.executeInlineScript(e.formname, e.script, [r]);}
				);},
		activate: function(s,e) {
			 cordova.plugins.unimag.swiper.activate(
				function(r){$window.executeInlineScript(s.formname, s.script, [r]);}, 
				function(r){$window.executeInlineScript(e.formname, e.script, [r]);}
				);},
		setReaderTypes: function(type,s,e) {
			 cordova.plugins.unimag.swiper.setReaderType(
				type,
				function(r){$window.executeInlineScript(s.formname, s.script, [r]);}, 
				function(r){$window.executeInlineScript(e.formname, e.script, [r]);}
				);},
		enableLogs: function(enable,s,e) {
			 cordova.plugins.unimag.swiper.enableLogs(
				enable,
				function(r){$window.executeInlineScript(s.formname, s.script, [r]);}, 
				function(r){$window.executeInlineScript(e.formname, e.script, [r]);}
				);},
		setReaderType: function(type,s,e) {
			 cordova.plugins.unimag.swiper.setReaderType(
				type,
				function(r){$window.executeInlineScript(s.formname, s.script, [r]);}, 
				function(r){$window.executeInlineScript(e.formname, e.script, [r]);}
				);}
	}
})
.run(function($rootScope,$services){})