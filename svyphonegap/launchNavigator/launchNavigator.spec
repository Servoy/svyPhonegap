{
	"name": "svyphonegap-launchNavigator",
	"displayName": "launchNavigator",
	"version": 1,
	"definition": "svyphonegap/launchNavigator/launchNavigator.js",
    "doc": "svyphonegap/launchNavigator/launchNavigator_doc.js",
	"ng2Config": 
	{
		"packageName": "@servoy/svyphonegap",
		"serviceName": "launchNavigatorService",
		"entryPoint": "dist/servoy/ng2package"
	},

	"libraries": 
	[
		
	],

	"model": 
	{
		"text": "string"
	},

	"api": 
	{
		"launchNavigator": 
		{
			"parameters": 
			[
				{
					"name": "address",
					"type": "string"
				}
			]
		}
	}
}