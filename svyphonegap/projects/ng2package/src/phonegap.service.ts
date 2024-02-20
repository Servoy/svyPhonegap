import { Injectable } from '@angular/core';
import { ServoyPublicService } from '@servoy/public';
declare let App: any;
declare let window: any;
declare let Servoy: any;
declare let cordova: any;
declare let AndroidFullScreen: any;
declare let navigator: any;
declare let MobileAccessibility: any;

@Injectable()
export class phonegapService {
    constructor(private servoyService: ServoyPublicService) {
        window.App = {};
        window.Servoy = {};
    }

    init(onReady) {
        App = {
            cloneAsObject: function(obj) {
                if (obj === null || !(obj instanceof Object)) {
                    return obj;
                }
                var temp = (obj instanceof Array) ? [] : {};
                // ReSharper disable once MissingHasOwnPropertyInForeach
                for (var key in obj) {
                    temp[key] = this.cloneAsObject(obj[key]);
                }
                return temp;
            },

            initialize: function() {
                this.bindEvents();
            },

            bindEvents: function() {
                this.bindEventsInterval = setInterval(function() {
                    if (typeof cordova !== 'undefined' && cordova.file) {
                        clearInterval(this.bindEventsInterval);
                        this.onDeviceReady();
                    }
                }.bind(this), 50)

            },
            onDeviceReady: function() {
                console.log('device ready!')
                document.addEventListener("pause", onPause, false);
                document.addEventListener("resume", onResume, false);

                //Initialize fullscreen if plugin is available
                if (typeof AndroidFullScreen !== 'undefined') {
                    AndroidFullScreen.immersiveMode(null, null);
                }

                //get build info
                cordova.getAppVersion.getVersionNumber(function(d) {
                    Servoy.buildInfo.versionNumber = d;
                    cordova.getAppVersion.getVersionCode(function(d) {
                        Servoy.buildInfo.versionCode = d;
                        cordova.getAppVersion.getPackageName(function(d) {
                            Servoy.buildInfo.packageName = d;
                            cordova.getAppVersion.getAppName(function(d) {
                                Servoy.buildInfo.appName = d;
                                Servoy.helperCB(onReady);
                            });
                        });
                    });
                });

                document.addEventListener("backbutton", function(e) {
                    e.preventDefault();
                    onBack();
                }, false);

                function onBack() {
                    console.log('back');
                    // Handle the hardware back button event

                    try {
                        Servoy.helperCB(Servoy.onBackMethod);
                    } catch (e) {
                        console.log(e)
                    }
                }

                //runs when the app is on background
                function onPause() {
                    console.log('pause');
                    // Handle the pause event
                    try {
                        Servoy.helperCB(Servoy.onPauseMethod);
                    } catch (e) {
                        console.log(e)
                    }
                }

                //runs when the app resumes
                function onResume() {
                    console.log('resume');
                    // Handle the resume event
                    try {
                        Servoy.helperCB(Servoy.onResumeMethod);
                    } catch (e) {
                        console.log(e)
                    }
                }
            }.bind(this)
        };

        Servoy = {
            servoyService: this.servoyService,
            helperCB: function(cb, d) {
                if (cb) {
                    cb(d);
                }
            },
            watchID: null,
            initwebview: null,
            bridgeInit: null,
            onPauseMethod: null,
            onResumeMethod: null,
            onBackMethod: null,
            buildInfo: {
                versionCode: '',
                appName: '',
                packageName: '',
                versionNumber: ''
            },
            setPauseMethod: function(cb) {
                //set call back for servoy client
                Servoy.onPauseMethod = cb;
            },
            setResumeMethod: function(cb) {
                //set call back for servoy client
                Servoy.onResumeMethod = cb;
            },
            setBackMethod: function(cb) {
                //set call back for servoy client
                Servoy.onBackMethod = cb;
            }
        }

        App.initialize();
    }
    setOnResumeMethod(callback) {
        try {
            Servoy.setResumeMethod(callback);
        } catch (e) {
            console.error('Error : ' + e.message)
        }
    }
    setOnPauseMethod(callback) {
        try {
            Servoy.setPauseMethod(callback);
        } catch (e) {
            console.error('Error :' + e.message)
        }
    }
    setOnBackMethod(callback) {
        try {
            Servoy.setBackMethod(callback);
        } catch (e) {
            console.error('Error :' + e.message)
        }
    }
    exit(callback) {
        try {
            if (navigator.app) {
                navigator.app.exitApp();
            } else if (navigator.device) {
                navigator.device.exitApp();
            } else {
                window.close();
            }
        } catch (e) {
            console.error('Error : ' + e.message)
        }
    }
    quitServoySolution() {
        sessionStorage.clear();
        location.reload();
    }
    executeScript(script, scriptArgs) {
        try {
    		var mArgs = scriptArgs;
            if (!Array.isArray(scriptArgs)) {
                mArgs = [scriptArgs]
            }
            var f = eval("(" + script + ")");
            return f.apply(this, mArgs);
    	} catch (e) {
    		console.log(e);
    	}
    }
    getBuildInfo() {
        return [Servoy.buildInfo];
    }
    executeBeep(n) {
        navigator.notification.beep(n);
    }
    executeVibration(n) {
        navigator.vibrate(n);
    }
    setTextZoom(n) {
        MobileAccessibility.setTextZoom(n);
    }

}