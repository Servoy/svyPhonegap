{
	"name": "svyphonegap-push",
	"displayName": "push",
	"version": 1,
	"definition": "svyphonegap/push/push.js",
	"ng2Config": 
	{
		"packageName": "@servoy/svyphonegap",
		"serviceName": "pushService",
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
		"onTokenRefresh": 
		{
			"parameters": 
			[
				{
					"name": "callbackMethod",
					"type": "function"
				}
			],

			"returns": "boolean"
		},

		"getToken": 
		{
			"parameters": 
			[
				{
					"name": "callbackMethod",
					"type": "function"
				}
			],

			"returns": "boolean"
		},

		"subscribeToTopic": 
		{
			"parameters": 
			[
				{
					"name": "topic",
					"type": "string"
				},
				{
					"name": "callbackMethod",
					"type": "function"
				}				
			],

			"returns": "boolean"
		},

		"unubscribeFromTopic": 
		{
			"parameters": 
			[
				
				{
					"name": "topic",
					"type": "string"
				},
				
				{
					"name": "callbackMethod",
					"type": "function"
				}

				
			],

			"returns": "boolean"
		},

		"onNotification": 
		{
			"parameters": 
			[
				{
					"name": "onNotificationCallback",
					"type": "function"
				}
			],

			"returns": "boolean"
		},

		"isSupported": 
		{
			"parameters": 
			[
				
			],

			"returns": "boolean"
		}
	}
}