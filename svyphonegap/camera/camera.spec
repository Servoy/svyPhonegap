{
	"name": "svyphonegap-camera",
	"displayName": "camera",
	"version": 1,
	"definition": "svyphonegap/camera/camera.js",
	"libraries": 
	[
		{
			"name": "bridge.js",
			"version": "1.0.0",
			"url": "svyphonegap/lib/bridge.js",
			"mimetype": "text/javascript"
		}
	],

	"model": 
	{
		
	},

	"api": 
	{
		"getPicture": 
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
				},

				{
					"name": "options",
					"type": "object",
					"optional": true
				}
			],

			"returns": "boolean"
		},

		"isSupported": 
		{
			"parameters": 
			[
				{
					"name": "callbackMethod",
					"type": "function"
				}
			],

			"returns": "boolean"
		}
	}
}