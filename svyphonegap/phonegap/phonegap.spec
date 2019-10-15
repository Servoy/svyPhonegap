{
	"name": "svyphonegap-phonegap",
	"displayName": "phonegap",
	"version": 1,
 	"definition": "svyphonegap/phonegap/phonegap.js",
	"libraries": [{
		"name": "bridge.js",
		"version": "1.0.0",
		"url": "svyphonegap/phonegap/bridge.js",
		"mimetype": "text/javascript"
	}],
	"model": {},
 	"api": {
 		"executeScript": {
			"parameters": [{
				"name": "script",
				"type": "string",
				"optional": false
			},
			{
				"name": "scriptArguments",
				"type": "object",
				"optional": true
			},
			{
				"name": "callbackMethod",
				"type": "function",
				"optional": true
			}],
			"returns": "boolean"
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
		},"setBackMethod": 
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