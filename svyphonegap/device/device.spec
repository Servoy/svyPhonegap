{
	"name": "svyphonegap-device",
	"displayName": "device",
	"version": 1,
	"definition": "svyphonegap/device/device.js",
	"ng2Config": 
	{
		"packageName": "@servoy/svyphonegap",
		"serviceName": "deviceService",
		"entryPoint": "dist/servoy/ng2package"
	},

	"libraries": 
	[
		
	],

	"model": 
	{
		
	},

	"api": 
	{
		"getDeviceInfo": 
		{
			"parameters": 
			[
				
			]
		},

		"getDeviceInfoProperty": 
		{
			"parameters": 
			[
				{
					"name": "propertyName",
					"type": "string"
				}
			]
		}
	}
}