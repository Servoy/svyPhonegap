angular.module('svyphonegapPush', ['servoy']).factory("svyphonegapPush", function($services, $http, $window) {
		var scope = $services.getServiceScope('svyphonegapPush');
		return {
			/**
			 * Get a callback every time a token is generated, including the initial generation.
			 * </ul>
			 *
			 * @param {Function} callback
			 *
			 */
			onTokenRefresh: function(callback) {
				FCM.onTokenRefresh().then(function(data) {
						$window.executeInlineScript(callback.formname, callback.script, [data]);
					});
			},
			/**
			 * Generate a token
			 * </ul>
			 *
			 * @param {Function} callback
			 *
			 */
			getToken: function(callback) {									
				FCM.getToken().then(function(data) {
						$window.executeInlineScript(callback.formname, callback.script, [data]);
					});
			},
			/**
			 *Subscribe to a topic
			 *All devices are subscribed automatically to 'all' and 'ios' or 'android' topic respectively.
			 *Must match the following regular expression: "[a-zA-Z0-9-_.~%]{1,900}".
			 * </ul>
			 *			 
			 * @param {String} topic
			 * @param {Function} callback
			 *
			 */
			subscribeToTopic: function(topic,callback) {		
				FCM.createNotificationChannel({
					  id: 'urgent_alert', // required
					  name: "Urgent Alert", // required
					  description: "Very urgent message alert",
					  importance: "high", // https://developer.android.com/guide/topics/ui/notifiers/notifications#importance
					  visibility: "public", // https://developer.android.com/training/notify-user/build-notification#lockscreenNotification
					  sound: "default", // In the "alert_sound" example, the file should located as resources/raw/alert_sound.mp3
					  lights: true, // enable lights for notifications
					  vibration: true // enable vibration for notifications
				});
				
				FCM.requestPushPermission({
					  ios9Support: {
					    timeout: 10,  // How long it will wait for a decision from the user before returning `false`
					    interval: 0.3 // How long between each permission verification
					  }
					});
				FCM.subscribeToTopic(topic).then(function(data) {
						$window.executeInlineScript(callback.formname, callback.script, [data]);
					});

			},
			/**
			 *unSubscribe from a topic
			 *All devices are subscribed automatically to 'all' and 'ios' or 'android' topic respectively.
			 *Must match the following regular expression: "[a-zA-Z0-9-_.~%]{1,900}".
			 * </ul>
			 *
			 * @param {String} topic
			 * @param {Function} callback			 			 
			 *
			 */
			unubscribeFromTopic: function(topic, callback) {
				FCM.unsubscribeFromTopic(topic).then(function(data) {
						$window.executeInlineScript(callback.formname, callback.script, [data]);
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
				}.bind(this));
			},
			/**
			 * Send a notification to devices that are subscribed to a particular topic
			 * an Authkey is required from Google Firebase Cloud Messaging Service
			 * </ul>
			 * @param {String} authKey example : AIzaSy*******************
			 * @param {String} title
			 * @param {String} body
			 * @param {String} topic
			 * @param {String} channel
			 * @param {Function} successCallback
			 * @param {Function} errorCallback
			 *
			 */
			sendNotification: function(authKey, title, body, topic, channel, successCallback, errorCallback) {				
				$http({
					url: "https://fcm.googleapis.com/fcm/send",
					method: "POST",
					headers: {
						'Content-Type': 'application/json',
						'Authorization': 'key=' + authKey
					},
					data: {							
						'priority': 'high',
						'to': '/topics/' + topic,
						notification: {	
							'android_channel_id':channel,
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