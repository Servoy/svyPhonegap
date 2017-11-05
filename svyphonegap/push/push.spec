{
	"name": "svyphonegap-push",
	"displayName": "push",
	"version": 1,
	"definition": "svyphonegap/push/push.js",
	"libraries": 
	[
		
	],

	"model": 
	{
		"text": "string"
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