{
	"name": "svyphonegap-networkinterface",
	"displayName": "networkinterface",
	"version": 1,
 	"definition": "svyphonegap/networkinterface/networkinterface.js",
    "doc": "svyphonegap/networkinterface/networkinterface_doc.js",
 	"ng2Config": {
       "packageName": "@servoy/svyphonegap",
       "serviceName": "networkinterfaceService",
       "entryPoint": "dist/servoy/ng2package"
    },
	"libraries": [],
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
					"name": "successCallback",
					"type": "function"
				},

				{
					"name": "errorCallback",
					"type": "function"
				}
			]
		},

		"getCarrierIPAddress": 
		{
			"parameters": 
			[
				{
					"name": "successCallback",
					"type": "function"
				},

				{
					"name": "errorCallback",
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