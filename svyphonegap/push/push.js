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
			isSupported: function() {
				return !!FCM;
			}

		}
	}).run(function($rootScope, $services) { })