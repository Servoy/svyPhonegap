var Bridge = new function() {
    this.iFrame = null;
    this.init = function(iFrame) {
        if (Servoy.bridgeInit) return;
        Servoy.bridgeInit = true;
        this.iFrame = iFrame;

        if (window.addEventListener) {
            window.addEventListener("message", executeMethod, false);
        } else if (window.attachEvent) {
            window.attachEvent("onmessage", executeMethod);
        }

        function executeMethod(event) {
            var method = event.data.method;
            var callbackMethod = event.data.callbackMethod;
            var params = event.data.params;

            for (var i = 0; i < params.length; i++) {
                if ((params[i] instanceof Object && params[i].hasOwnProperty("script"))) {
                    params[i] = new Function("var message = {method: " + JSON.stringify(params[i]) + ", params: Array.prototype.slice.call(arguments)}; Bridge.sendMessageToClient(message);");
                }
            }

            var functionToCall = eval("(" + method + ")");
            try {
                var retVal = functionToCall.apply(null, params);

                if (callbackMethod) {
                    Bridge.iFrame.contentWindow.postMessage({ method: callbackMethod, params: retVal }, '*');
                }
            } catch (e) {
                console.log('Error calling function ' + method + ': ' + e.message);
            }

            function isFunction(stringFunction) {
                try {
                    return eval("(" + stringFunction + ")") instanceof Function;
                } catch (error) {
                    return false;
                }
            }
        }
    }
    this.sendMessageToClient = function(msg) {
        function cloneAsObject(obj) {
            if (obj === null || !(obj instanceof Object)) {
                return obj;
            }
            var temp = (obj instanceof Array) ? [] : {};

            for (var key in obj) {
                temp[key] = cloneAsObject(obj[key]);
            }
            return temp;
        }

        var params = JSON.stringify(cloneAsObject(msg.params));
        msg.params = params;
        console.log(msg);
        try {
            this.iFrame.contentWindow.postMessage(msg, '*');
        } catch (e) {
            console.log(e.message);
        }
    }

}

var app = {

    initialize: function() {
        this.bindEvents();

        //fix for using wkwebview engine with IOS 13 (session cookies)
        if (window.WkWebView && document.cookie == '' && (navigator.userAgent.indexOf('iPhone') != -1 || navigator.userAgent.indexOf('iPad') != -1)) {
            app.initView = setInterval(function() {
                if (WebviewSwitch && document.cookie == '') {
                    document.cookie = 'init'
                    WebviewSwitch.load('CDVUIWebViewEngine');
                }

                if (document.cookie == 'init') {
                    clearInterval(app.initView);
                    WebviewSwitch.load('CDVWKWebViewEngine');
                }
            }, 2500)
        } else {
            document.getElementById('iframe').style.visibility = 'visible';
        }
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);

        //setup iframe
        document.getElementById('iframe').addEventListener('load',
            function() {
                Bridge.init(this);
            }
        )
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
                    Servoy.onBackMethod();
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

var Servoy = {
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
    },
}