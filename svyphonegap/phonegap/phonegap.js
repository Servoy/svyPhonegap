angular.module('svyphonegapPhonegap', ['servoy']).factory("svyphonegapPhonegap", function($services, $window) {
    var scope = $services.getServiceScope('svyphonegapPhonegap');
    return {
        init: function(onReady) {
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
                    console.log('bindEvents');

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
                                    $window.executeInlineScript(onReady.formname, onReady.script, []);
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
                            if (Servoy.onBackMethod) {
                                $window.executeInlineScript(Servoy.onBackMethod.formname, Servoy.onBackMethod.script, []);
                            }
                        } catch (e) {
                            console.log(e)
                        }
                    }

                    //runs when the app is on background
                    function onPause() {
                        console.log('pause');
                        // Handle the pause event
                        try {
                            if (Servoy.onPauseMethod) {
                                $window.executeInlineScript(Servoy.onPauseMethod.formname, Servoy.onPauseMethod.script, []);
                            }
                        } catch (e) {
                            console.log(e)
                        }
                    }

                    //runs when the app resumes
                    function onResume() {
                        console.log('resume');
                        // Handle the resume event
                        try {
                            if (Servoy.onResumeMethod) {
                                $window.executeInlineScript(Servoy.onResumeMethod.formname, Servoy.onResumeMethod.script, []);
                            }
                        } catch (e) {
                            console.log(e)
                        }
                    }
                }
            };

            Servoy = {
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
        },
        setOnResumeMethod: function(callback) {
            try {
                Servoy.setResumeMethod(callback);
            } catch (e) {
                console.error('Error : ' + e.message)
            }
        },
        setOnPauseMethod: function(callback) {
            try {
                Servoy.setPauseMethod(callback);
            } catch (e) {
                console.error('Error :' + e.message)
            }
        },
        setOnBackMethod: function(callback) {
            try {
                Servoy.setBackMethod(callback);
            } catch (e) {
                console.error('Error :' + e.message)
            }
        },
        exit: function(callback) {
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
        },
        quitServoySolution: function() {
            sessionStorage.clear();
            location.reload();
        },
        executeScript: function(script, scriptArgs) {
        	try {
        		var mArgs = scriptArgs;
                if (!Array.isArray(scriptArgs)) {
                    mArgs = [scriptArgs]
                }                
                var f = eval("(" + script + ")");
                if(f)
                return f.apply(this, mArgs);
        	} catch (e) {
        		console.log(e);
        	}
        },
        getBuildInfo: function() {
            return [Servoy.buildInfo];
        },
        executeBeep: function(n) {
            navigator.notification.beep(n);
        },
        executeVibration: function(n) {
            navigator.vibrate(n);
        },
        setTextZoom: function(n) {
            MobileAccessibility.setTextZoom(n);
        }
    }
}).run(function($rootScope, $services) {})