{
	"name": "svyphonegap-phonegap",
	"displayName": "phonegap",
	"version": 1,
 	"definition": "svyphonegap/phonegap/phonegap.js",
	"libraries": [{"name":"android.js", 
	"version":"1", 
	"url":"svyphonegap/phonegap/lib/android/cordova.js", 
	"mimetype":"text/javascript"},{"name":"ios.js", 
	"version":"1", 
	"url":"svyphonegap/phonegap/lib/ios/cordova.js", 
	"mimetype":"text/javascript"}],
	"model": {},
 	"api": {
 		"init": 
	   	{
	    	"parameters": []
		},
 		"setOnResumeMethod": 
	   	{
	    	"parameters": [{
				"name": "callbackMethod",
				"type": "function"
			}]
		},"setOnPauseMethod": 
	   	{
	    	"parameters": [{
				"name": "callbackMethod",
				"type": "function"
			}]
		},"setOnBackMethod": 
	   	{
	    	"parameters": [{
				"name": "callbackMethod",
				"type": "function"
			}]
		},"exit": 
	   	{
	    	"parameters": []
		}
 	}
}