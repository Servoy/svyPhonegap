{
	"name": "svyphonegap-fingerprintscan",
	"displayName": "fingerprintscan",
	"version": 1,
	"definition": "svyphonegap/fingerprintscan/fingerprintscan.js",
	"ng2Config": 
	{
		"packageName": "@servoy/svyphonegap",
		"serviceName": "fingerprintscanService",
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
		"isAvailable": 
		{
			"parameters": 
			[
				{
					"name": "onSuccessCallbackMethod",
					"type": "function"
				},

				{
					"name": "onErrorCallbackMethod",
					"type": "function"
				}
			]
		},

		"show": 
		{
			"parameters": 
			[
				{
					"name": "config",
					"type": "object"
				},

				{
					"name": "successCallback",
					"type": "function"
				},

				{
					"name": "errorCallback",
					"type": "function"
				}
			]
		}
	}
}