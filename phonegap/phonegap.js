/**
 * Callback method for when solution is opened.
 * When deeplinking into solutions, the argument part of the deeplink url will be passed in as the first argument
 * All query parameters + the argument of the deeplink url will be passed in as the second argument
 * For more information on deeplinking, see the chapters on the different Clients in the Deployment Guide.
 *
 * @param {String} arg startup argument part of the deeplink url with which the Client was started
 * @param {Object<Array<String>>} queryParams all query parameters of the deeplink url with which the Client was started
 *
 * @properties={typeid:24,uuid:"B620101F-7C53-471B-AE3B-CBFD16D05767"}
 */
function onSolutionOpen(arg, queryParams) {
	var android = {
		tagName: "script",
		attrs: [{
			name: "src",
			value: application.getServerURL() + "resources/fs/" + application.getSolutionName() + "/" + 'lib/android/cordova.js'
		}]
	};

	var ios = {
		tagName: "script",
		attrs: [{
			name: "src",
			value: application.getServerURL() + "resources/fs/" + application.getSolutionName() + "/" + 'lib/ios/cordova.js'
		}]
	};
	var u = plugins.ngclientutils.getUserAgent().toLowerCase()
	if (u.indexOf('iphone') != -1 || u.indexOf('ipad') != -1) {
		plugins.ngclientutils.contributedTags.push(ios);
	} else {
		plugins.ngclientutils.contributedTags.push(android);
	}

	//initialize phonegap module
	plugins.svyphonegapPhonegap.init();
}
