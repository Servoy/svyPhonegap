angular.module('svyphonegapPush', ['servoy']).factory("svyphonegapPush", function($services, $http) {
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
				Bridge.executeMethod(onTokenRefresh, null, [successCallback, errorCallback]);

				function onTokenRefresh(successCallback, errorCallback) {
					FCMPlugin.onTokenRefresh(successCallback, errorCallback);
				}
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
				Bridge.executeMethod(onTokenRefresh, null, [successCallback, errorCallback]);

				function onTokenRefresh(successCallback, errorCallback) {
					FCMPlugin.getToken(successCallback, errorCallback);
				}
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
				Bridge.executeMethod(subscribeToTopic, null, [successCallback, errorCallback, topic]);

				function subscribeToTopic(successCallback, errorCallback, topic) {
					FCMPlugin.subscribeToTopic(topic, successCallback, errorCallback);
				}
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
				Bridge.executeMethod(unsubscribeFromTopic, null, [successCallback, errorCallback, topic]);

				function unsubscribeFromTopic(successCallback, errorCallback, topic) {
					FCMPlugin.unsubscribeFromTopic(topic, successCallback, errorCallback);
				}
			},
			/**
			 *Define the behavior receiving a notification
			 *All devices are subscribed automatically to 'all' and 'ios' or 'android' topic respectively.
			 *Must match the following regular expression: "[a-zA-Z0-9-_.~%]{1,900}".
			 * </ul>
			 *
			 * @param {Function} onNotificationCallback
			 * @param {Function} successCallback
			 * @param {Function} errorCallback
			 *
			 */
			onNotification: function(onNotificationCallback, successCallback, errorCallback) {
				Bridge.executeMethod(onNotification, null, [onNotificationCallback, successCallback, errorCallback]);

				function unsubscribeFromTopic(onNotificationCallback, successCallback, errorCallback) {
					FCMPlugin.subscribeToTopic(onNotificationCallback, successCallback, errorCallback);
				}
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
			isSupported: function(callbackMethod) {
				Bridge.executeMethod(isSupported, callbackMethod);

				function isSupported() {
					return !!window.Notification;
				}

				function callback(result) {
					alert('Is supported: ' + result);
				}
			}

		}
	}).run(function($rootScope, $services) { })