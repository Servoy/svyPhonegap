{
	"name": "svyphonegap-ionic",
	"displayName": "ionic",
	"version": 1,
 	"definition": "svyphonegap/ionic/ionic.js",
 	"ng2Config": {
       "packageName": "@servoy/svyphonegap",
       "serviceName": "ionicService",
       "entryPoint": "dist/servoy/ng2package"
    },
	"libraries": [],
	"model":
	{
	    	
 	},
 	"api":
 	{
	   	"hideKeyboard": 
	   	{
	    	"parameters": []
		},
		"showKeyboard": 
	   	{
	    	"parameters": []
		},
		"isVisibleKeyboard": 
	   	{
	    	"parameters": [],
	    	"returns":"boolean"
		},
		"setResizeModeKeyboard": 
	   	{
	    	"parameters": [{
				"name": "type",
				"type": "string"
			}]
		},
		"setKeyboardStyleKeyboard": 
	   	{
	    	"parameters": [{
				"name": "type",
				"type": "string"
			}]
		},
		"disableScrollKeyboard": 
	   	{
	    	"parameters": [{
				"name": "enabled",
				"type": "boolean"
			}]
		}
 	}
}