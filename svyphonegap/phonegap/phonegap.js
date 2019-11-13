angular.module('svyphonegapPhonegap', ['servoy']).factory("svyphonegapPhonegap", function($services, $window) {
    var scope = $services.getServiceScope('svyphonegapPhonegap');
    return {
        init: function() {

            App = {
                initialize: function() {
                    this.bindEvents();
                },

                bindEvents: function() {
                    document.addEventListener('deviceready', this.onDeviceReady, false);

                },
                onDeviceReady: function() {
                    document.addEventListener("pause", onPause, false);
                    document.addEventListener("resume", onResume, false);

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
                                Servoy.onPauseMethod();
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
                                Servoy.onResumeMethod();
                            }
                        } catch (e) {
                            console.log(e)
                        }
                    }
                }
            };

            Servoy = {
                initwebview: null,
                bridgeInit: null,
                onPauseMethod: null,
                onResumeMethod: null,
                onBackMethod: null,
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
        executeScript: function(script, scriptArgs) {
            var mArgs = scriptArgs;
            if (!Array.isArray(scriptArgs)) {
                mArgs = [scriptArgs]
            }
            var f = eval("(" + script + ")");
            return f.apply(this, mArgs);
        }
    }
}).run(function($rootScope, $services) {})