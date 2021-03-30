{
	"name": "svyphonegap-phonegap",
	"displayName": "phonegap",
	"version": 1,
 	"definition": "svyphonegap/phonegap/phonegap.js",
	"libraries": [],
	"model": {},
 	"api": {
 		"init": 
	   	{
	    	"parameters": [{
				"name": "onReady",
				"type": "function"
			}]
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
		},
		"quitServoySolution": 
	   	{
	    	"parameters": []
		},
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
			}],
			"returns": "boolean"
 		},
 		"executeBeep": 
	   	{
	    	"parameters": [{
				"name": "times",
				"type": "integer"
			}]
		}, 		
 		"executeVibration": 
	   	{
	    	"parameters": [{
				"name": "time",
				"type": "integer"
			}]
		},
 		"getBuildInfo": 
	   	{
	    	"parameters": [],
	    	"returns":"object"
		}
 	} 	
}