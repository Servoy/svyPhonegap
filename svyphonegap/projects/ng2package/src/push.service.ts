import { Injectable } from '@angular/core';
import { ServoyPublicService } from '@servoy/public';
declare let FCM: any;

@Injectable()
export class pushService {
    constructor(private servoyService: ServoyPublicService) {}

    private helperCB(cb, d) {
        if (cb) {
            cb(d);
        }
    }

    /**
     * Get a callback every time a token is generated, including the initial generation.
     *
     * @param {Function} callback
     */
    onTokenRefresh(callback) {
        FCM.onTokenRefresh().then(function(data) {
            this.helperCB(callback, [data]);
        }.bind(this));
    }

    /**
     * Generate a token
     *
     * @param {Function} callback     
     */
    getToken(callback) {
        FCM.getToken().then(function(data) {
            this.helperCB(callback, [data]);
        }.bind(this));
    }

    /**
     * Subscribe to a topic.<br/><br/>
     * All devices are subscribed automatically to 'all' and 'ios' or 'android' topic respectively.
     * Must match the following regular expression: "[a-zA-Z0-9-_.~%]{1,900}".
     *
     * @param {String} topic
     * @param {Function} callback     
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
            this.helperCB(callback, data);
        }.bind(this));

    }

    /**
     * Unsubscribe from a topic.<br/><br/>
     * All devices are subscribed automatically to 'all' and 'ios' or 'android' topic respectively.
     * Must match the following regular expression: "[a-zA-Z0-9-_.~%]{1,900}".
     *
     * @param {String} topic
     * @param {Function} callback   
     */
    unubscribeFromTopic(topic, callback) {
        FCM.unsubscribeFromTopic(topic).then(function(data) {
            this.helperCB(callback, data);
        }.bind(this));
    }

    /**
     * Define the behavior receiving a notification
     *
     * @param {Function} onNotificationCallback
     */
    onNotification(onNotificationCallback) {
        FCM.onNotification(function(data) {
            this.helperCB(onNotificationCallback, [data]);
        }.bind(this));
    }

    isSupported() {
        return !!FCM;
    }
}