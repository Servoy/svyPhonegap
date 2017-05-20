{
	"name": "svyphonegap-camera",
	"displayName": "camera",
	"version": 1,
	"definition": "svyphonegap/camera/camera.js",
	"libraries": [],

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