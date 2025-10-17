{
	"name": "svyphonegap-camera",
	"displayName": "camera",
	"version": 1,
	"definition": "svyphonegap/camera/camera.js",
    "doc": "svyphonegap/camera/camera_doc.js",
	"ng2Config": 
	{
		"packageName": "@servoy/svyphonegap",
		"serviceName": "cameraService",
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
			"returns": "boolean"
		}
	}
}