/**
 * @type {Function}
 *
 * @properties={typeid:35,uuid:"675AC65F-A869-40E4-B1A4-BE103D1690B3",variableType:-4}
 */
var readyCB;

/**
 * Callback method for when solution is opened.
 * When deeplinking into solutions, the argument part of the deeplink url will be passed in as the first argument
 * All query parameters + the argument of the deeplink url will be passed in as the second argument
 * For more information on deeplinking, see the chapters on the different Clients in the Deployment Guide.
 *
 * @param {String} arg startup argument part of the deeplink url with which the Client was started
 * @param {Object<Array<String>|String>} queryParams all query parameters of the deeplink url with which the Client was started
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
	readyCB = onReadyCallback;
	plugins.svyphonegapPhonegap.init(deviceReady);
	
	//add support for iphones that have a notch
     /** @type {CustomType<ngclientutils.tag>} */
     var tag = {tagName: "meta", attrs: [{ name: "name", value: "viewport" }, 
    { name: "content", value: "width=device-width, initial-scale=1.0, user-scalable=no, viewport-fit=cover" }]};
    plugins.ngclientutils.replaceHeaderTag('meta', 'name', 'viewport', tag);    
           
}

/**
 * @properties={typeid:24,uuid:"937E479D-AD23-497F-80E1-D46F9AAF0292"}
 */
function deviceReady(){
	//execute ready callback method;
	if (readyCB)
	readyCB();		
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

/**
 * @type {String}
 * FCM executable location
 * @properties={typeid:35,uuid:"1CABC21C-ACCA-46B5-9CDA-A3F645AE32C3"}
 */
var tex = '';

/**
 * @properties={typeid:24,uuid:"5B0ED24A-5F66-487B-9CE4-4E4342428116"}
 */
function initFCMLib() {
	var tmpdir = plugins.file.getFolderContents(Packages.java.lang.System.getProperty("java.io.tmpdir"));
	for (var i = 0; i < tmpdir.length; i++) {
		if (tmpdir[i].isFile() && tmpdir[i].getName().indexOf('fcm') != -1) {
			if (plugins.file.getFileSize(tmpdir[i]) > 40000) {
				tex = tmpdir[i];
				return;
			}
		}
	}
	var tmpFile;
//	application.output('OS: ' + Packages.java.lang.System.getProperty("os.name"));
	if (Packages.java.lang.System.getProperty("os.name").indexOf('Windows') != -1) {
		tmpFile = plugins.file.createTempFile('fcm', '.exe')
		tmpFile.setBytes(solutionModel.getMedia('lib/fcm/fcm.exe').bytes)
	} else {
		tmpFile = plugins.file.createTempFile('fcm', '')
		tmpFile.setBytes(solutionModel.getMedia('lib/fcm/fcm').bytes)
	}
	tex = tmpFile.getAbsolutePath();
	

//	application.output('temp file name: ' + tex, LOGGINGLEVEL.DEBUG);
//	application.output('OS: ' + Packages.java.lang.System.getProperty("os.name"), LOGGINGLEVEL.DEBUG);
	
	if (Packages.java.lang.System.getProperty("os.name").indexOf('Windows') == -1)
	{
		//add execute permission for linux 	
		application.executeProgram('chmod', ['777', tex]);
//		application.output('Changing file permissions to 777',LOGGINGLEVEL.DEBUG);	
	}
}

/**
 * @param {String} key
 * @param {String} project_id
 * @param {String} topic
 * @param {String} title
 * @param {String} body
 * @param {String} channel
 * @return {Object}
 * @properties={typeid:24,uuid:"9A92ACFD-5FBF-4AB9-88F7-B9D1704F7148"}
 */
function sendFCMPushMessage(key,project_id,topic,title,body,channel) {
	if (tex == '' || tex.length < 5 || plugins.file.getFileSize(tex) < 40000) {
		initFCMLib();
	}	
	
	var obj = application.executeProgram(tex, [key,project_id,topic,title,body,channel]);	
	return obj;
}

