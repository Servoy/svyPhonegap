{
	"name": "svyphonegap-phonegap",
	"displayName": "phonegap",
	"version": 1,
	"definition": "svyphonegap/phonegap/phonegap.js",
    "doc": "svyphonegap/phonegap/phonegap_doc.js",
	"ng2Config": 
	{
		"packageName": "@servoy/svyphonegap",
		"serviceName": "phonegapService",
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
		"init": 
		{
			"parameters": 
			[
				{
					"name": "onReady",
					"type": "function"
				}
			]
		},

		"setOnResumeMethod": 
		{
			"parameters": 
			[
				{
					"name": "callbackMethod",
					"type": "function"
				}
			]
		},

		"setOnPauseMethod": 
		{
			"parameters": 
			[
				{
					"name": "callbackMethod",
					"type": "function"
				}
			]
		},

		"setOnBackMethod": 
		{
			"parameters": 
			[
				{
					"name": "callbackMethod",
					"type": "function"
				}
			]
		},

		"exit": 
		{
		},

		"quitServoySolution": 
		{
		},

		"executeScript": 
		{
			"parameters": 
			[
				{
					"name": "script",
					"type": "clientfunction",
					"optional": false
				},

				{
					"name": "scriptArguments",
					"type": "object",
					"optional": true
				}
			],

			"returns": "boolean"
		},

		"executeBeep": 
		{
			"parameters": 
			[
				{
					"name": "times",
					"type": "int"
				}
			]
		},

		"executeVibration": 
		{
			"parameters": 
			[
				{
					"name": "time",
					"type": "int"
				}
			]
		},
		
		"setTextZoom": 
		{
			"parameters": 
			[
				{
					"name": "textZoom",
					"type": "int"
				}
			]
		},

		"getBuildInfo": 
		{
			"returns": "object"
		},
		
		"checkPermission": 
		{
			"parameters": 
			[
				{
					"name": "permission",
					"type": "string"
				},
				{
					"name": "successCallbackMethod",
					"type": "function"
				},
				{
					"name": "errorCallbackMethod",
					"type": "function"
				}
			]
		},
		
		"requestPermissions": 
		{
			"parameters": 
			[
				{
					"name": "permissions",
					"type": "object"
				},
				{
					"name": "successCallbackMethod",
					"type": "function"
				},
				{
					"name": "errorCallbackMethod",
					"type": "function"
				}
			]
		}
	}
}