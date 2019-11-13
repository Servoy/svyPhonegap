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
 		}
 	}
 	}
}