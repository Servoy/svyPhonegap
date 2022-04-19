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
					"name": "onSuccessCallbackMethod",
					"type": "function"
				},

				{
					"name": "onErrorCallbackMethod",
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
					"name": "onSuccessCallbackMethod",
					"type": "function"
				},

				{
					"name": "onErrorCallbackMethod",
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
					"name": "onSuccessCallbackMethod",
					"type": "function"
				},

				{
					"name": "onErrorCallbackMethod",
					"type": "function"
				},

				{
					"name": "topic",
					"type": "string"
				}
			],

			"returns": "boolean"
		},

		"unubscribeFromTopic": 
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
					"name": "topic",
					"type": "string"
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
				},

				{
					"name": "onSuccessCallbackMethod",
					"type": "function"
				},

				{
					"name": "onErrorCallbackMethod",
					"type": "function"
				}
			],

			"returns": "boolean"
		},

		"sendNotification": 
		{
			"parameters": 
			[
				{
					"name": "authKey",
					"type": "string"
				},

				{
					"name": "title",
					"type": "string"
				},

				{
					"name": "body",
					"type": "string"
				},

				{
					"name": "topic",
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