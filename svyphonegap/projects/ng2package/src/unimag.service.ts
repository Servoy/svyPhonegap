import { Injectable } from '@angular/core';
import { ServoyPublicService } from '@servoy/public';
declare let UniMag: any;
declare let navigator: any;

@Injectable()
export class unimagService {
    constructor(private servoyService: ServoyPublicService) {}

    private helperCB(cb, d) {
        if (cb) {
            this.servoyService.executeInlineScript(cb.formname, cb.script, [d]);
        }
    }

    getReaderTypes(cb) {
        UniMag.getReaderType(function(r) {
            this.helperCB(cb, [r]);
        }.bind(this));

    }

    /**
     * Register observers for reader events     
     * @properties={typeid:24,uuid:"A6619C7C-AF19-4815-A98A-0FB5C763CE7D"}
     */
    registerObservers(oa, od, oc, odd, op, ocf, ocs, ocdp, odrcd, ocsf, ocss, odrcr, ocff, osm) {

        /**
         * get base16 encoded string, given unsigned char (byte) array
         * @param array
         *
         * @properties={typeid:24,uuid:"A6619C7C-AF19-4815-A98A-0FB5C763CE7D"}
         */
        function getBase16(array) {
            var ret = [],
                a = array;
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
            var ret = [],
                a = array;
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
                this.helperCB(oa);
            }.bind(this);
            dict["DetachmentNotification"] = function() {
                this.helperCB(od);
            }.bind(this);
            dict["DidConnectNotification"] = function() {
                this.helperCB(oc);
            }.bind(this);
            dict["DidDisconnectNotification"] = function() {
                this.helperCB(odd);
            }.bind(this);
            dict["PoweringNotification"] = function() {
                this.helperCB(op);
            }.bind(this);
            dict["ConnectFailedNotification"] = function(r) {
                this.helperCB(ocf, [r]);
            }.bind(this);
            dict["CardSwipeNotification"] = function() {
                this.helperCB(ocs);
            }.bind(this);
            dict["CardDataProcessingNotification"] = function() {
                this.helperCB(ocdp);
            }.bind(this);
            dict["DidReceiveCardDataNotification"] = function(r) {
                var vAry = new Uint8Array(r, 0); //
                this.helperCB(odrcd, [getBase16(vAry), getStrRepr(vAry)]);
            }.bind(this);
            dict["CardSwipeFailedNotification"] = function() {
                this.helperCB(ocsf);
            }.bind(this);
            dict["CmdSendingNotification"] = function() {
                this.helperCB(ocss);
            }.bind(this);
            dict["DidReceiveCmdResponseNotification"] = function() {
                this.helperCB(odrcr);
            }.bind(this);
            dict["CMDFailedNotification"] = function() {
                this.helperCB(ocff);
            }.bind(this).bind(this);
            dict["SystemMessageNotification"] = function() {
                this.helperCB(osm);
            }.bind(this);
            UniMag.registerObservers(dict);
        }
    }
    autoConfig(s, e) {}
    /**
     * Prepare reader for a swipe
     * @properties={typeid:24,uuid:"38866AA2-4A03-4CD2-99BB-38B158A05DB5"}
     */
    swipe() {
        UniMag.requestSwipe();
    }
    /**
     * Deactivate device
     * @properties={typeid:24,uuid:"38866AA2-4A03-4CD2-99BB-38B158A05DB5"}
     */
    deactivate(s, e) {
        UniMag.destroyUniMagObj();
    }
    activate() {
        UniMag.initUniMagObj();
        UniMag.setAutoConnect(true);
        UniMag.setSwipeTimeoutDuration(0);
        UniMag.setAutoAdjustVolume(true);
        UniMag.startUniMag(true);
    }
    /**
     * Cancel current task
     * @properties={typeid:24,uuid:"38866AA2-4A03-4CD2-99BB-38B158A05DB5"}
     */
    cancelTask() {
        UniMag.cancelTask()
    }
    /**          
     * Set reader type
     * @param {String} rt Reader Type, can be one of (UniMag II, Shuttle, or UniMag Pro)             
     * @properties={typeid:24,uuid:"38866AA2-4A03-4CD2-99BB-38B158A05DB5"}
     */
    setReaderTypes(rt) {
        UniMag.setReaderType(rt)
    }
    /**
     * Enable logging
     * @properties={typeid:24,uuid:"38866AA2-4A03-4CD2-99BB-38B158A05DB5"}
     */
    enableLogs(enable) {
        UniMag.enableLogging(enable);
    }

}