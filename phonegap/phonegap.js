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
 * @param {String} topic
 * @param {String} title
 * @param {String} body
 * @param {String} channel
 * @return {Object}
 * Sends a push notification to a topic.
 * @properties={typeid:24,uuid:"9A92ACFD-5FBF-4AB9-88F7-B9D1704F7148"}
 */
function sendFCMPushMessage(topic,title,body,channel) {

	if (topic === null || topic === undefined || title === null || title === undefined || body === null || body === undefined) {
		application.output('FCM: topic, title and body are required')
		return null;
	}

	// load services.json key stored under /media
	var key_media = solutionModel.getMedia('lib/fcm/services.json')
	if (!key_media) {
		application.output('No services.json found. Cannot send notifications')
		return null;
	}

	var services;
	try {
		services = JSON.parse(new Packages.java.lang.String(key_media.bytes, 'UTF-8'));
	} catch (e) {
		application.output('FCM: invalid services.json : ' + (e.message || e.toString()))
		return null;
	}
	var projectId = services.project_id;
	if (!projectId || !services.client_email || !services.private_key) {
		application.output('FCM: services.json needs project_id, client_email and private_key')
		return null;
	}

	try {
		// 1) get OAuth2 access token via signed JWT
		var tokenResp = _fcmHttpPost(services.token_uri, _fcmTokenBody(services), 'application/x-www-form-urlencoded', null);
		var tokenJson = tokenResp.body ? JSON.parse(tokenResp.body) : {};
		if (!tokenJson.access_token) {
			application.output('Unable to send message to "' + topic + '": token request failed (' + tokenResp.status + ') ' + tokenResp.body)
			return null;
		}

		// 2) send message to Firebase v1 API
		var message = _fcmBuildMessage(topic, title, body, channel);
		var fcmResp = _fcmHttpPost(
			'https://fcm.googleapis.com/v1/projects/' + encodeURIComponent(projectId) + '/messages:send',
			JSON.stringify(message),
			'application/json',
			'Bearer ' + tokenJson.access_token
		);

		if (fcmResp.status >= 400) {
			application.output('Unable to send message to "' + topic + '": HTTP ' + fcmResp.status + ' - ' + fcmResp.body)
			return { status: fcmResp.status, body: fcmResp.body };
		}

		application.output('Message sent to "' + topic + '"');
		return { status: fcmResp.status, body: fcmResp.body };
	} catch (e) {
		var detail = (e && e.message) ? e.message : (e ? e.toString() : 'unknown error');
		application.output('Unable to send message to "' + topic + '": ' + detail)
		if (e && e.stack) application.output('Stack: ' + e.stack)
		return null;
	}
}

/**
 * Builds the OAuth2 JWT assertion for the service account.
 */
function _fcmTokenBody(services) {
	var now = Math.floor(Packages.java.lang.System.currentTimeMillis() / 1000);
	var claims = {
		iss: services.client_email,
		scope: 'https://www.googleapis.com/auth/firebase.messaging',
		aud: services.token_uri,
		iat: now
	};

	// PKCS#8 base64 (PEM body) private key + derived matching public key (SPKI base64)
	var privateKeyB64 = _fcmPemB64(String(services.private_key));
	var publicKeyB64 = _fcmDerivePublicKeyB64(privateKeyB64);

	var token = plugins.jwt.builder()
		.payload(claims)
		.withExpires(new Packages.java.util.Date((now + 3600) * 1000))
		.sign(plugins.jwt.RSA256(publicKeyB64, privateKeyB64));

	return 'grant_type=' + encodeURIComponent('urn:ietf:params:oauth:grant-type:jwt-bearer') + '&assertion=' + encodeURIComponent(token);
}

/**
 * Derives the matching public key from the private key.
 */
function _fcmDerivePublicKeyB64(privateKeyB64) {
	var der = Packages.java.util.Base64.getDecoder().decode(privateKeyB64);
	var kf = Packages.java.security.KeyFactory.getInstance('RSA');
	var priv = kf.generatePrivate(new Packages.java.security.spec.PKCS8EncodedKeySpec(der));
	if (priv instanceof Packages.java.security.interfaces.RSAPrivateCrtKey) {
		var pub = kf.generatePublic(new Packages.java.security.spec.RSAPublicKeySpec(priv.getModulus(), priv.getPublicExponent()));
		return Packages.java.util.Base64.getEncoder().encodeToString(pub.getEncoded());
	}
	throw new java.lang.IllegalArgumentException('services.json private_key is not an RSA private key');
}

/**
 * Extracts the base64 body from a PEM private key.
 */
function _fcmPemB64(pem) {
	var out = '';
	var lines = String(pem).split('\n');
	for (var i = 0; i < lines.length; i++) {
		var l = lines[i].replace('\r', '').trim();
		if (l !== '' && l.indexOf('---') !== 0) out += l;
	}
	return out;
}

/**
 * Builds the push notification message payload.
 */
function _fcmBuildMessage(topic, title, body, channel) {
	var message = {
		topic: topic,
		// FCM v1 top-level notification only allows title/body/image
		notification: {
			title: title,
			body: body
		},
		android: {
			notification: {
				title: title,
				body: body,
				icon: 'fcm_push_icon',
				sound: 'default',
				click_action: 'FCM_PLUGIN_ACTIVITY'
			}
		},
		apns: {
			headers: { 'apns-priority': '10' },
			payload: {
				aps: {
					alert: { title: title, body: body },
					badge: 1,
					sound: 'default'
				}
			}
		}
	};
	if (channel) {
		message.android.notification.channel_id = channel;
	}
	return { message: message };
}

function _fcmHttpPost(url, body, contentType, authHeader) {
	var client = plugins.http.createNewHttpClient();
	client.setTimeout(20000);
	var request = client.createPostRequest(url);
	request.setCharset('UTF-8');
	if (contentType) request.setBodyContent(body, contentType);
	if (authHeader) request.addHeader('Authorization', authHeader);
	var response = request.executeRequest();
	var result = { status: response.getStatusCode(), body: response.getResponseBody() };
	client.close();
	return result;
}

/**
 * @properties={typeid:24,uuid:"0260CAF8-76E7-442A-BC3C-62A402FEE74E"}
 */
function testSend(){
	scopes.phonegap.sendFCMPushMessage('Topic','INFO','This is a test','urgent_alert');
}
