{
	"name": "svyphonegap-phonegap",
	"displayName": "phonegap",
	"version": 1,
 	"definition": "svyphonegap/phonegap/phonegap.js",
	"libraries": [{
		"name": "bridge.js",
		"version": "1.0.0",
		"url": "svyphonegap/phonegap/bridge.js",
		"mimetype": "text/javascript"
	}],
	"model": {
		"onBackCallbackMethod": {
			"type": "string"
		}
	},
 	"api": {
 		"executeScript": {
			"parameters": [{
				"name": "script",
				"type": "string",
				"optional": false
			},
			{
				"name": "scriptArguments",
				"type": "object",
				"optional": true
			},
			{
				"name": "callbackMethod",
				"type": "function",
				"optional": true
			}],
			"returns": "boolean"
 		}
 	}
}