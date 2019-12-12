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
				"type": "double"
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
				"type": "double"
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
			"parameters": []
		}
 	}
}