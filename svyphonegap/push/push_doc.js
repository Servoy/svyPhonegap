/*
 * A service for interacting with device notifications - when running the client wrapped inside a PhoneGap app.
 */

/**
 * Get a callback every time a token is generated, including the initial generation.
 *
 * @param {Function} callbackMethod
 */
function onTokenRefresh(callbackMethod) {}

/**
 * Generate a token.
 *
 * @param {Function} callbackMethod     
 */
function getToken(callbackMethod) {}

/**
 * Subscribe to a topic.<br/><br/>
 * All devices are subscribed automatically to 'all' and 'ios' or 'android' topic respectively.
 * Must match the following regular expression: "[a-zA-Z0-9-_.~%]{1,900}".
 *
 * @param {String} topic
 * @param {Function} callbackMethod     
 */
function subscribeToTopic(topic, callbackMethod) {}

/**
 * Unsubscribe from a topic.
 * All devices are subscribed automatically to 'all' and 'ios' or 'android' topic respectively.
 * Must match the following regular expression: "[a-zA-Z0-9-_.~%]{1,900}".
 *
 * @param {String} topic
 * @param {Function} callback   
 */
function unubscribeFromTopic(topic, callbackMethod) {}

/**
 * Define the behavior receiving a notification.
 *
 * @param {Function} onNotificationCallback
 */
function onNotification(onNotificationCallback) {}

function isSupported() {}
