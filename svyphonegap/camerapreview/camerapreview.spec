{
	"name": "svyphonegap-camerapreview",
	"displayName": "camerapreview",
	"version": 1,
	"definition": "svyphonegap/camerapreview/camerapreview.js",
    "doc": "svyphonegap/camerapreview/camerapreview_doc.js",
	"ng2Config": 
	{
		"packageName": "@servoy/svyphonegap",
		"serviceName": "camerapreviewService",
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
		"startCamera": 
		{
			"parameters": 
			[
				{
					"name": "options",
					"type": "object"
				},

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

		"takePicture": 
		{
			"parameters": 
			[
				{
					"name": "options",
					"type": "object"
				},

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

		"setCameraOption": 
		{
			"parameters": 
			[
				{
					"name": "option",
					"type": "string"
				},

				{
					"name": "mode",
					"type": "string"
				},

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

		"stopCamera": 
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
					"name": "onSuccessCallbackMethod",
					"type": "function"
				},

				{
					"name": "onErrorCallbackMethod",
					"type": "function"
				}
			]
		},

		"hide": 
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
		}
	}
}