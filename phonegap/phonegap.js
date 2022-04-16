/**
 * Callback method for when solution is opened.
 * When deeplinking into solutions, the argument part of the deeplink url will be passed in as the first argument
 * All query parameters + the argument of the deeplink url will be passed in as the second argument
 * For more information on deeplinking, see the chapters on the different Clients in the Deployment Guide.
 *
 * @param {String} arg startup argument part of the deeplink url with which the Client was started
 * @param {Object<Array<String>>} queryParams all query parameters of the deeplink url with which the Client was started
 * @param {Function} onReadyCallback
 * @properties={typeid:24,uuid:"B620101F-7C53-471B-AE3B-CBFD16D05767"}
 */
function onSolutionOpen(arg, queryParams, onReadyCallback) {
	plugins.ngclientutils.setViewportMetaDefaultForMobileAwareSites();

	if (!isMobile.Android() && !isMobile.iOS() && !isMobile.iPadOS()) return;
	if (!queryParams || !queryParams.phonegap) return;
	/** @type {CustomType<ngclientutils.tag>} */
	var android = {
		tagName: "script",
		attrs: [{
			name: "src",
			value: application.getServerURL() + "resources/fs/" + application.getSolutionName() + "/" + 'lib/android/cordova.js'
		}]
	};

	/** @type {CustomType<ngclientutils.tag>} */
	var ios = {
		tagName: "script",
		attrs: [{
			name: "src",
			value: application.getServerURL() + "resources/fs/" + application.getSolutionName() + "/" + 'lib/ios/cordova.js'
		}]
	};

	if (isMobile.iOS() || isMobile.iPadOS()) {
		plugins.ngclientutils.contributedTags.push(ios);
	} else {
		plugins.ngclientutils.contributedTags.push(android);
	}

	//initialize phonegap module
	plugins.svyphonegapPhonegap.init(onReadyCallback);

}

/**
 * @properties={typeid:35,uuid:"8FDE0AC4-C448-43AB-96E6-1DB080A00316",variableType:-4}
 */
var isMobile = {
	Android: function() {
		var agent = plugins.ngclientutils.getUserAgent().toLowerCase();
		return agent.match(/android/i);
	},
	BlackBerry: function() {
		var agent = plugins.ngclientutils.getUserAgent().toLowerCase();
		return agent.match(/blackBerry/i);
	},
	iOS: function() {
		var agent = plugins.ngclientutils.getUserAgent().toLowerCase();
		return agent.match(/iphone|ipad|ipod/i);
	},
	iPadOS: function() {
		return plugins.pgutilDevicechk.isiPadOS();
	},
	Opera: function() {
		var agent = plugins.ngclientutils.getUserAgent().toLowerCase();
		return agent.match(/opera mini/i);
	},
	Windows: function() {
		var agent = plugins.ngclientutils.getUserAgent().toLowerCase();
		return agent.match(/ieMobile/i);
	},
	any: function() {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows() || isMobile.iPadOS());
	}
};

