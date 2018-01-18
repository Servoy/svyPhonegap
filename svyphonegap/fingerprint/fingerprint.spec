{
	"name": "svyphonegap-fingerprint",
	"displayName": "fingerprint",
	"version": 1,
 	"definition": "svyphonegap/fingerprint/fingerprint.js",
 	"serverscript": "svyphonegap/fingerprint/fingerprint_server.js",
	"libraries": [],
	"model":
	{
 	},
 	"api":
 	{
	   	"createConfigObject": 
	   	{
	    	"parameters":
	    	[
			]
		},
		"isAvailable": 
		{
			"parameters": 
			[
				{
					"name": "isAvailableSuccess",
					"type": "function"
				},
				{
					"name": "isAvailableError",
					"type": "function"
				}
			],

			"returns": "isAvailableResult"
		},
		"encrypt": 
		{
			"parameters": 
			[
				{
					"name": "encryptConfig",
					"type": "configObject"
				},
				{
					"name": "encryptSuccessCallback",
					"type": "function"
				},
				{
					"name": "encryptErrorCallback",
					"type": "function"
				}
			],

			"returns": "isAvailableResult"
		},
		"decrypt": 
		{
			"parameters": 
			[
				{
					"name": "decryptConfig",
					"type": "configObject"
				},
				{
					"name": "decryptSuccessCallback",
					"type": "function"
				},
				{
					"name": "decryptErrorCallback",
					"type": "function"
				}
			],

			"returns": "isAvailableResult"
		},
		"delete": 
		{
			"parameters": 
			[
				{
					"name": "config",
					"type": "configObject"
				},
				{
					"name": "successCallback",
					"type": "function"
				},
				{
					"name": "errorCallback",
					"type": "function"
				}
			],

			"returns": "isAvailableResult"
		}
 	},
 	"types": {
 		"isAvailableResult": {
 			"isAvailable": {"type": "boolean"},
 			"isHardwareDetected": {"type": "boolean"},
 			"hasEnrolledFingerprints": {"type": "boolean"}
 		},
 		"configObject": {
 			"clientId"			: {"type": "string"},
 			"username"			: {"type": "string"},
 			"password"			: {"type": "string"},
 			"token"				: {"type": "string"},
 			"disableBackup"		: {"type": "boolean"},
 			"maxAttempts"		: {"type": "int"},
 			"locale"			: {"type": "string"},
 			"encryptNoAuth"		: {"type": "boolean"},
 			"dialogTitle"		: {"type": "string"},
 			"dialogMessage"		: {"type": "string"},
 			"dialogHint"		: {"type": "string"}
 		}
 	}
}