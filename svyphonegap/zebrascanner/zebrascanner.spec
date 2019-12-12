{
	"name": "svyphonegap-zebrascanner",
	"displayName": "zebrascanner",
	"version": 1,
 	"definition": "svyphonegap/zebrascanner/zebrascanner.js",
	"libraries": [],
	"model":{},
 	"api":
 	{
	    "startHardKeyRead": 
	   	{
	    	"parameters": [{
				"name": "onSuccessCallbackMethod",
				"type": "function"
			}, {
				"name": "onErrorCallbackMethod",
				"type": "function"
			}, {
				"name": "wait",
				"type": "number"
			}]
		},
		 "startSoftKeyRead": 
	   	{
	    	"parameters": [{
				"name": "onSuccessCallbackMethod",
				"type": "function"
			}, {
				"name": "onErrorCallbackMethod",
				"type": "function"
			}, {
				"name": "wait",
				"type": "number"
			}]
		},	
		"init": 
	   	{
	    	"parameters": []
		},	 
		"reinit": 
	   	{
	    	"parameters": []
		},
		"deinit": 
	   	{
	    	"parameters": []
		},
		 "stopReading": 
	   	{
	    	"parameters": []
		},
		
		"isSupported": {
			"parameters": [{
				"name": "callbackMethod",
				"type": "function"
			}]
		}
 	}
}