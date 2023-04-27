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
     * @param {Function} successCallback
     * @param {Function} errorCallback
     *
     */
    onTokenRefresh(successCallback, errorCallback) {
        FCM.onTokenRefresh(function(data) {
            this.helperCB(successCallback, [data]);
        }.bind(this), function(err) {
            this.helperCB(errorCallback, [err]);
        }.bind(this));
    }

    /**
     * Generate a token
     * </ul>
     *
     * @param {Function} successCallback
     * @param {Function} errorCallback
     *
     */
    getToken(successCallback, errorCallback) {
        FCM.getToken(function(data) {
            this.helperCB(successCallback, [data]);
        }.bind(this), function(err) {
            this.helperCB(errorCallback, [err]);
        }.bind(this));
    }

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
    subscribeToTopic(successCallback, errorCallback, topic) {
        FCM.subscribeToTopic(topic, function(data) {
            this.helperCB(successCallback, [data]);
        }.bind(this), function(err) {
            this.helperCB(errorCallback, [err]);
        }.bind(this));

    }

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
    unubscribeFromTopic(successCallback, errorCallback, topic) {
        FCM.unsubscribeFromTopic(topic, function(data) {
            this.helperCB(successCallback, [data]);
        }.bind(this), function(err) {
            this.helperCB(errorCallback, [err]);
        }.bind(this));
    }

    /**
     *Define the behavior receiving a notification
     * </ul>
     *
     * @param {Function} onNotificationCallback
     * @param {Function} successCallback
     * @param {Function} errorCallback
     *
     */
    onNotification(onNotificationCallback, successCallback, errorCallback) {
        FCM.onNotification(function(data) {
            this.helperCB(onNotificationCallback, [data]);
        }.bind(this), function(data) {
            this.helperCB(successCallback, [data]);
        }.bind(this), function(err) {
            this.helperCB(errorCallback, [err]);
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
     * @param {Function} successCallback
     * @param {Function} errorCallback
     *
     */
    sendNotification(authKey, title, body, topic, successCallback, errorCallback) {
        var data = {
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