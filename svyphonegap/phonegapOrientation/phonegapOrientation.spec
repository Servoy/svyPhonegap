{
	"name": "svyphonegap-phonegapOrientation",
	"displayName": "phonegapOrientation",
	"version": 1,
 	"definition": "svyphonegap/phonegapOrientation/phonegapOrientation.js",
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
        "getOrientationTypes": {"returns": "object"}
    }
}