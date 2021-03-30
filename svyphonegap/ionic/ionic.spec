{
	"name": "svyphonegap-ionic",
	"displayName": "ionic",
	"version": 1,
 	"definition": "svyphonegap/ionic/ionic.js",
	"libraries": [],
	"model":
	{
    	"text": "string"
 	},
 	"api":
 	{
	   	"hideKeyboard": 
	   	{
	    	"parameters": [{
				"name": "times",
				"type": "integer"
			}]
		},
		"showKeyboard": 
	   	{
	    	"parameters": [{
				"name": "times",
				"type": "integer"
			}]
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