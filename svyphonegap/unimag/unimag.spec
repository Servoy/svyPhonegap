{
	"name": "svyphonegap-unimag",
	"displayName": "unimag",
	"version": 1,
 	"definition": "svyphonegap/unimag/unimag.js",
 	"ng2Config": {
       "packageName": "@servoy/svyphonegap",
       "serviceName": "unimagService",
       "entryPoint": "dist/servoy/ng2package"
    },
	"libraries": [],
	"model":
	{
 	},
 	"api":
 	{
	   	"getReaderTypes": 
	   	{
	    	"parameters": [
	    	{"name":"callback", "type":"function"}
	    	]						
		},
		"activate": 
	   	{
	    	"parameters":
	    	[
	    	]
		},
		"deactivate": 
	   	{
	    	"parameters":
	    	[
	    	]
		},
		"swipe": 
	   	{
	    	"parameters":
	    	[
	    	]
		},
		"cancelTask": 
	   	{
	    	"parameters":
	    	[
	    	]
		},
		"enableLogs": 
	   	{
	    	"parameters":
	    	[
	    	{"name":"enable", "type":"boolean"}
	    	]
		},"setReaderType": 
	   	{
	    	"parameters":
	    	[
	    	{"name":"type", "type":"string"},
	    	{"name":"success", "type":"function"},
	    	{"name":"error", "type":"function"}
	    	]
		},
		"autoConfig": 
	   	{
	    	"parameters":
	    	[
	    	{"name":"success", "type":"function"},
	    	{"name":"error", "type":"function"}
	    	]
		},	
		"registerObservers": 
	   	{
	    	"parameters":[	  
	    	{"name":"OnAttachment", "type":"function"},
	    	{"name":"OnDetachment", "type":"function"},
	    	{"name":"OnConnect", "type":"function"},
	    	{"name":"OnDisconnect", "type":"function"},
	    	{"name":"OnPowering", "type":"function"},
	    	{"name":"OnConnectFailed", "type":"function"},
	    	{"name":"OnCardSwipe", "type":"function"},
	    	{"name":"OnCardDataProcessing", "type":"function"},
	    	{"name":"OnDidReceiveCardData", "type":"function"},
	    	{"name":"OnCardSwipeFailed", "type":"function"},
	    	{"name":"OnCmdSending", "type":"function"},
	    	{"name":"OnDidReceiveCmdResponse", "type":"function"},
	    	{"name":"OnCMDFailed", "type":"function"},
	    	{"name":"OnSystemMessage", "type":"function"}
	    	]
		}
 	}
}