{
	"name": "svyphonegap-qrscanner",
	"displayName": "qrscanner",
	"version": 1,
 	"definition": "svyphonegap/qrscanner/qrscanner.js",
	"libraries": [],
	"model": {},
 	"api":
 	{
	   	"scan": 
	   	{
	    	"parameters": [{
				"name": "onSuccessCallbackMethod",
				"type": "function"
			}, {
				"name": "onErrorCallbackMethod",
				"type": "function"
			}]
		},
		"useCamera": 
	   	{
	    	"parameters": [
	    	{
				"name": "camera",
				"type": "number"
			},
	    	{
				"name": "onSuccessCallbackMethod",
				"type": "function"
			}, {
				"name": "onErrorCallbackMethod",
				"type": "function"
			}]
		},
		"enableLight": 
	   	{
	    	"parameters": [{
				"name": "onSuccessCallbackMethod",
				"type": "function"
			}, {
				"name": "onErrorCallbackMethod",
				"type": "function"
			}]
		},
		"disableLight": 
	   	{
	    	"parameters": [{
				"name": "onSuccessCallbackMethod",
				"type": "function"
			}, {
				"name": "onErrorCallbackMethod",
				"type": "function"
			}]
		},
		"prepare": 
	   	{
	    	"parameters": [{
				"name": "onSuccessCallbackMethod",
				"type": "function"
			}, {
				"name": "onErrorCallbackMethod",
				"type": "function"
			}]
		},
		"cancelScan": 
	   	{
	    	"parameters": [{
				"name": "onSuccessCallbackMethod",
				"type": "function"
			}]
		},
		"getStatus": 
	   	{
	    	"parameters": [{
				"name": "onSuccessCallbackMethod",
				"type": "function"
			}]
		},
		"show": 
	   	{
	    	"parameters": [{
				"name": "onSuccessCallbackMethod",
				"type": "function"
			}]
		},
		"hide": 
	   	{
	    	"parameters": [{
				"name": "onSuccessCallbackMethod",
				"type": "function"
			}]
		},
		"destroy": 
	   	{
	    	"parameters": [{
				"name": "onSuccessCallbackMethod",
				"type": "function"
			}]
		},
		"isSupported": {
			"parameters": [{
				"name": "callbackMethod",
				"type": "function"
			}]
		}
 	}
}