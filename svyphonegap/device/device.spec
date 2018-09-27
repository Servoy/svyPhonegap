{
	"name": "svyphonegap-device",
	"displayName": "device",
	"version": 1,
 	"definition": "svyphonegap/device/device.js",
	"libraries": [],
	"model":
	{
    	"text": "string"
 	},
 	"api":
 	{
	   "getDeviceInfo": 
		{
			"parameters": 
			[
				{
					"name": "callbackMethod",
					"type": "function"
				}
			]
		},
		"getDeviceInfoProperty": 
		{
			"parameters": 
			[
				{
					"name": "callbackMethod",
					"type": "function"
				},
				{
					"name": "propertyName",
					"type": "string"
				}
			]
		}
 	}
}