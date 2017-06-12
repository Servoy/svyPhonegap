angular.module('svyphonegapBrowser',['servoy'])
.factory("svyphonegapBrowser",function($services) 
{
	var scope = $services.getServiceScope('svyphonegapBrowser');
	return {
		/**
		 * Open a link on device's default browser		  
		 * @param {String} link Link to open
		 *
		 */
		openExternalLink: function(link) {
			 
			 Bridge.executeMethod(openExternalLink, null, [link]);

				function openExternalLink(link) {
					try {
						return navigator.app.loadUrl(link, { openExternal:true });
					} catch (e) {
						window.alert('error opening link' + e.message);
					}
				}
		}
	}
})
.run(function($rootScope,$services){})