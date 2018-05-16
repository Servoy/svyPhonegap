{
	"name": "svyphonegap-fingerprint",
	"displayName": "fingerprint",
	"version": 1,
	"definition": "svyphonegap/fingerprint/fingerprint.js",
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