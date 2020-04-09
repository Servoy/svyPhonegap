angular.module('svyphonegapUnimag', ['servoy']).factory("svyphonegapUnimag", function($services, $window) {
		var scope = $services.getServiceScope('svyphonegapUnimag');
		return {
			getReaderTypes: function(cb) {
				UniMag.getReaderType(function(r){
					$window.executeInlineScript(cb.formname, cb.script, [r]);	
				});
				
			},
			/**
			 * Register observers for reader events		
			 * @properties={typeid:24,uuid:"A6619C7C-AF19-4815-A98A-0FB5C763CE7D"}
			 */
			registerObservers: function(oa, od, oc, odd, op, ocf, ocs, ocdp, odrcd, ocsf, ocss, odrcr, ocff, osm) {
				
				/**
				 * get base16 encoded string, given unsigned char (byte) array
				 * @param array
				 *
				 * @properties={typeid:24,uuid:"A6619C7C-AF19-4815-A98A-0FB5C763CE7D"}
				 */
				function getBase16(array) {
					var ret = [], a = array;
					for (var i = 0; i < a.length; i++) {
						var hex = a[i].toString(16);
						ret[i] = (hex.length == 1 ? "0" : "") + hex;
						if (i % 4 == 3)
							ret[i] += " ";
					}
					return ret.join("");
				}

				/**
				 * get ASCII string, with escape chars, from unsigned char (byte) array
				 * @param array
				 *
				 * @properties={typeid:24,uuid:"38866AA2-4A03-4CD2-99BB-38B158A05DB5"}
				 */
				function getStrRepr(array) {
					var ret = [], a = array;
					for (var i = 0; i < a.length; i++) {
						if (a[i] == '\t'.charCodeAt(0)) {
							ret[i] = "\\t";
						} else if (a[i] == '\n'.charCodeAt(0)) {
							ret[i] = "\\n";
						} else if (a[i] == '\r'.charCodeAt(0)) {
							ret[i] = "\\r";
						} else if (a[i] == '\\'.charCodeAt(0)) {
							ret[i] = "\\\\";
							//printable
						} else if (a[i] >= 0x20 && a[i] <= 0x7E) {
							ret[i] = String.fromCharCode(a[i]);
							//use \hex for all others
						} else {
							var hex = a[i].toString(16);
							ret[i] = "\\" + (hex.length == 1 ? "0" : "") + hex; // eg. 0xab => \ab instead of \xab
						}
					}
					return ret.join("");
				}

				if (navigator.userAgent.indexOf('iPhone') != -1 || navigator.userAgent.indexOf('iPad') != -1) {
					//register listeners
					var dict = new Array();
					dict["AttachmentNotification"] = function() {
						$window.executeInlineScript(oa.formname, oa.script, []);
					};
					dict["DetachmentNotification"] = function() {
						$window.executeInlineScript(od.formname, od.script, []);
					};
					dict["DidConnectNotification"] = function() {
						$window.executeInlineScript(oc.formname, oc.script, []);
					};
					dict["DidDisconnectNotification"] = function() {
						$window.executeInlineScript(odd.formname, odd.script, []);
					};
					dict["PoweringNotification"] = function() {
						$window.executeInlineScript(op.formname, op.script, []);
					};
					dict["ConnectFailedNotification"] = function(r) {
						$window.executeInlineScript(ocf.formname, ocf.script, [r]);
					};
					dict["CardSwipeNotification"] = function() {
						$window.executeInlineScript(ocs.formname, ocs.script, []);
					};
					dict["CardDataProcessingNotification"] = function() {
						$window.executeInlineScript(ocdp.formname, ocdp.script, []);
					};
					dict["DidReceiveCardDataNotification"] = function(r) {
						var vAry = new Uint8Array(r, 0); //
						$window.executeInlineScript(odrcd.formname, odrcd.script, [getBase16(vAry), getStrRepr(vAry)]);
					};
					dict["CardSwipeFailedNotification"] = function() {
						$window.executeInlineScript(ocsf.formname, ocsf.script, []);
					};
					dict["CmdSendingNotification"] = function() {
						$window.executeInlineScript(ocss.formname, ocss.script, []);
					};
					dict["DidReceiveCmdResponseNotification"] = function() {
						$window.executeInlineScript(odrcr.formname, odrcr.script, []);
					};
					dict["CMDFailedNotification"] = function() {
						$window.executeInlineScript(ocff.formname, ocff.script, []);
					};
					dict["SystemMessageNotification"] = function() {
						$window.executeInlineScript(osm.formname, osm.script, []);
					};
					UniMag.registerObservers(dict);
				}
			},
			autoConfig: function(s, e) { },
			/**
			 * Prepare reader for a swipe
			 * @properties={typeid:24,uuid:"38866AA2-4A03-4CD2-99BB-38B158A05DB5"}
			 */
			swipe: function() {
				UniMag.requestSwipe();
			},
			/**
			 * Deactivate device
			 * @properties={typeid:24,uuid:"38866AA2-4A03-4CD2-99BB-38B158A05DB5"}
			 */
			deactivate: function(s, e) {
				UniMag.destroyUniMagObj();
			},
			activate: function() {
				UniMag.initUniMagObj();
				UniMag.setAutoConnect(true);
				UniMag.setSwipeTimeoutDuration(0);
				UniMag.setAutoAdjustVolume(true);
				UniMag.startUniMag(true);
			},
			/**
			 * Cancel current task
			 * @properties={typeid:24,uuid:"38866AA2-4A03-4CD2-99BB-38B158A05DB5"}
			 */
			cancelTask: function() {
				UniMag.cancelTask()
			},
			/**			 
			 * Set reader type
			 * @param {String} rt Reader Type, can be one of (UniMag II, Shuttle, or UniMag Pro)			 
			 * @properties={typeid:24,uuid:"38866AA2-4A03-4CD2-99BB-38B158A05DB5"}
			 */
			setReaderTypes: function(rt) {
				UniMag.setReaderType(rt)
			},
			/**
			 * Enable logging
			 * @properties={typeid:24,uuid:"38866AA2-4A03-4CD2-99BB-38B158A05DB5"}
			 */
			enableLogs: function(enable) {
				UniMag.enableLogging(enable);
			},
		}
	}).run(function($rootScope, $services) { })