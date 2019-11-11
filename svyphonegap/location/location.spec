{
	"name": "svyphonegap-location",
	"displayName": "location",
	"version": 1,
	"definition": "svyphonegap/location/location.js",
	"libraries": [],
	"model": {},
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
			],"returns":"string"
		},

		"watchPosition": 
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

		"clearWatch": 
		{
			"parameters": 
			[
				{
					"name": "watchId",
					"type": "string",
					"optional": true
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