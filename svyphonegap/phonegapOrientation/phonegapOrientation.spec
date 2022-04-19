{
	"name": "svyphonegap-phonegapOrientation",
	"displayName": "phonegapOrientation",
	"version": 1,
 	"definition": "svyphonegap/phonegapOrientation/phonegapOrientation.js",
 	"ng2Config": {
       "packageName": "@servoy/svyphonegap",
       "serviceName": "phonegapOrientationService",
       "entryPoint": "dist/servoy/ng2package"
    },
	"libraries": [],
	"model": {"onOrientationChangeCallbackMethod": {"type": "function"}},
    "api": {
        "lock": {
	        "parameters": [
	        {
	            "name": "orientationType",
	            "type": "string",
	            "optional": false
	        }]
        },
        "unlock": {},
        "getOrientationTypes": {"returns": "object"},
        "setOrientationChangeCallback": {
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