import { Injectable } from '@angular/core';
import { ServoyPublicService } from '@servoy/public';
declare let FCM: any;

@Injectable()
export class pushService {
    constructor(private servoyService: ServoyPublicService) {}

     private helperCB(cb, d) {
        if (cb) {
            this.servoyService.executeInlineScript(cb.formname, cb.script, [d]);
        }
    }

    /**
     * Get a callback every time a token is generated, including the initial generation.
     * </ul>
     *
     * @param {Function} callback
     *
     */
    onTokenRefresh(callback) {
        FCM.onTokenRefresh().then(function(data) {
            this.helperCB(callback, [data]);
        }.bind(this));
    }

    /**
     * Generate a token
     * </ul>
     *
     * @param {Function} callback     
     *
     */
    getToken(callback) {
        FCM.getToken().then(function(data) {
            this.helperCB(callback, [data]);
        }.bind(this));
    }

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
    subscribeToTopic(topic,callback) {
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
            this.helperCB(callback, [data]);
        }.bind(this));

    }

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
    unubscribeFromTopic(topic, callback) {
        FCM.unsubscribeFromTopic(topic).then(function(data) {
            this.helperCB(callback, [data]);
        }.bind(this));
    }

    /**
     *Define the behavior receiving a notification
     * </ul>
     *
     * @param {Function} onNotificationCallback
     *
     */
    onNotification(onNotificationCallback) {
        FCM.onNotification(function(data) {
            this.helperCB(onNotificationCallback, [data]);
        }.bind(this));
    }

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
    sendNotification(authKey, title, body, topic, channel, successCallback, errorCallback) {
        var data = {
            priority: 'high',
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

        let xhr = new XMLHttpRequest();
        xhr.open("POST", "https://fcm.googleapis.com/fcm/send");
        xhr.setRequestHeader("Authorization", 'key=' + authKey);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                this.helperCB(successCallback, [xhr.status, xhr.responseText]);
            }
        }.bind(this);

        xhr.send(JSON.stringify(data));
    }

    isSupported() {
        return !!FCM;
    }
}