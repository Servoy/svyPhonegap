{
	"name": "svyphonegap-networkinterface",
	"displayName": "networkinterface",
	"version": 1,
	"definition": "svyphonegap/networkinterface/networkinterface.js",
	"libraries": 
	[
		
	],

	"model": 
	{
		
	},

	"api": 
	{
		"getWiFiIPAddress": 
		{
			"parameters": 
			[
				{
					"name": "onSuccess",
					"type": "function"
				},

				{
					"name": "onError",
					"type": "function"
				}
			]
		},

		"getCarrierIPAddress": 
		{
			"parameters": 
			[
				{
					"name": "onSuccess",
					"type": "function"
				},

				{
					"name": "onError",
					"type": "function"
				}
			]
		},

		"getHttpProxyInformation": 
		{
			"parameters": 
			[
				{
					"name": "url",
					"type": "string"
				},

				{
					"name": "onSuccess",
					"type": "function"
				},

				{
					"name": "onError",
					"type": "function"
				}
			]
		}
	}
}