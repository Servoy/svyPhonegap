{
	"name": "svyphonegap-location",
	"displayName": "location",
	"version": 1,
	"definition": "svyphonegap/location/location.js",
	"libraries": [],
	"model": 
	{
		"text": "string"
	},

	"api": 
	{
		"getCurrentPosition": 
		{
			"parameters": 
			[
				{
					"name": "onSuccessCallbackMethod",
					"type": "function"
				},

				{
					"name": "onErrorCallbackMethod",
					"type": "function",
					"optional": true
				},

				{
					"name": "options",
					"type": "object",
					"optional": true
				}
			]
		},

		"watchPosition": 
		{
			"parameters": 
			[
				{
					"name": "onWatchSetCallback",
					"type": "function"
				},

				{
					"name": "onSuccessCallbackMethod",
					"type": "function"
				},

				{
					"name": "onErrorCallbackMethod",
					"type": "function",
					"optional": true
				},

				{
					"name": "options",
					"type": "object",
					"optional": true
				}
			]
		},

		"clearWatch": 
		{
			"parameters": 
			[
				{
					"name": "watchId",
					"type": "string"
				}
			]
		},

		"isSupported": 
		{
			"parameters": 
			[
				{
					"name": "callbackMethod",
					"type": "function"
				}
			]
		}
	}
}