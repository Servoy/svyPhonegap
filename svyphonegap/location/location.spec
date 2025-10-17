{
	"name": "svyphonegap-location",
	"displayName": "location",
	"version": 1,
 	"definition": "svyphonegap/location/location.js",
    "doc": "svyphonegap/location/location_doc.js",
 	"ng2Config": {
       "packageName": "@servoy/svyphonegap",
       "serviceName": "locationService",
       "entryPoint": "dist/servoy/ng2package"
    },
	"libraries": [],
	"model":
	{
    	
 	},
 	"api": 
	{
		"getCurrentPosition": 
		{
			"parameters": 
			[
				{
					"name": "successCallback",
					"type": "function"
				},

				{
					"name": "errorCallback",
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
					"name": "successCallback",
					"type": "function"
				},

				{
					"name": "errorCallback",
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