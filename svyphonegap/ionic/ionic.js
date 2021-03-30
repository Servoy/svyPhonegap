angular.module('svyphonegapIonic',['servoy'])
.factory("svyphonegapIonic",function($services) 
{
	var scope = $services.getServiceScope('svyphonegapIonic');
	return {
		showKeyboard: function() {	
			Keyboard.show();
		},
		hideKeyboard: function() {	
			Keyboard.hide();
		},
		isVisibleKeyboard: function(tp) {	
			return Keyboard.isVisible
		},
		setResizeModeKeyboard: function(tp) {	
			Keyboard.setResizeMode(tp);
		},
		setKeyboardStyleKeyboard: function(tp) {	
			Keyboard.setKeyboardStyle(tp);
		},
		disableScrollKeyboard: function(tp) {	
			Keyboard.disableScroll(tp);
		}
	}
})
.run(function($rootScope,$services){})