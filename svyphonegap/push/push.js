angular.module('svyphonegapPush', ['servoy']).factory("svyphonegapPush", function($services, $http, $window) {
		var scope = $services.getServiceScope('svyphonegapPush');
		return {
			/**
			 * Get a callback every time a token is generated, including the initial generation.
			 * </ul>
			 *
			 * @param {Function} successCallback
			 * @param {Function} errorCallback
			 *
			 */
			onTokenRefresh: function(successCallback, errorCallback) {
				FCM.onTokenRefresh().then(function(data) {
						$window.executeInlineScript(successCallback.formname, successCallback.script, [data]);
					}, function(err) {
						$window.executeInlineScript(errorCallback.formname, errorCallback.script, [err]);
					});
			},
			/**
			 * Generate a token
			 * </ul>
			 *
			 * @param {Function} successCallback
			 * @param {Function} errorCallback
			 *
			 */
			getToken: function(successCallback, errorCallback) {
				FCM.getToken().then(function(data) {
						$window.executeInlineScript(successCallback.formname, successCallback.script, [data]);
					}, function(err) {
						$window.executeInlineScript(errorCallback.formname, errorCallback.script, [err]);
					});
			},
			/**
			 *Subscribe to a topic
			 *All devices are subscribed automatically to 'all' and 'ios' or 'android' topic respectively.
			 *Must match the following regular expression: "[a-zA-Z0-9-_.~%]{1,900}".
			 * </ul>
			 *
			 * @param {Function} successCallback
			 * @param {Function} errorCallback
			 * @param {String} topic
			 *
			 */
			subscribeToTopic: function(successCallback, errorCallback, topic) {
				FCM.subscribeToTopic(topic).then(function(data) {
						$window.executeInlineScript(successCallback.formname, successCallback.script, [data]);
					}, function(err) {
						$window.executeInlineScript(errorCallback.formname, errorCallback.script, [err]);
					});

			},
			/**
			 *unSubscribe from a topic
			 *All devices are subscribed automatically to 'all' and 'ios' or 'android' topic respectively.
			 *Must match the following regular expression: "[a-zA-Z0-9-_.~%]{1,900}".
			 * </ul>
			 *
			 * @param {Function} successCallback
			 * @param {Function} errorCallback
			 * @param {String} topic
			 *
			 */
			unubscribeFromTopic: function(successCallback, errorCallback, topic) {
				FCM.unsubscribeFromTopic(topic).then(function(data) {
						$window.executeInlineScript(successCallback.formname, successCallback.script, [data]);
					}, function(err) {
						$window.executeInlineScript(errorCallback.formname, errorCallback.script, [err]);
					});
			},
			/**
			 *Define the behavior receiving a notification
			 * </ul>
			 *
			 * @param {Function} onNotificationCallback
			 *
			 */
			onNotification: function(onNotificationCallback) {
				FCM.onNotification(function(data){
					$window.executeInlineScript(onNotificationCallback.formname, onNotificationCallback.script, [data]);
				});
			},
			/**
			 * Send a notification to devices that are subscribed to a particular topic
			 * an Authkey is required from Google Firebase Cloud Messaging Service
			 * </ul>
			 * @param {String} authKey example : AIzaSy*******************
			 * @param {String} title
			 * @param {String} body
			 * @param {String} topic
			 * @param {Function} successCallback
			 * @param {Function} errorCallback
			 *
			 */
			sendNotification: function(authKey, title, body, topic, successCallback, errorCallback) {
				$http({
					url: "https://fcm.googleapis.com/fcm/send",
					method: "POST",
					headers: {
						'Content-Type': 'application/json',
						'Authorization': 'key=' + authKey
					},
					data: {
						priority: 'high',
						'to': '/topics/' + topic,
						notification: {
							'title': title,
							'body': body,
							"sound": "default",
							"click_action": "FCM_PLUGIN_ACTIVITY",
							"icon": "fcm_push_icon"
						}
					}
				}).then(successCallback, errorCallback);
			},
			isSupported: function() {
				return !!FCM;
			}

		}
	}).run(function($rootScope, $services) { })