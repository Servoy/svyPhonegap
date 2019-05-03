{
	"name": "svyphonegap-barcode",
	"displayName": "barcode",
	"version": 1,
 	"definition": "svyphonegap/barcode/barcode.js",
	"libraries": [],
	"model":
	{
 	},
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
		"isSupported": {
			"parameters": [{
				"name": "callbackMethod",
				"type": "function"
			}]
		}
 	}
}