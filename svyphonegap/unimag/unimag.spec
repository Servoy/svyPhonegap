{
	"name": "svyphonegap-unimag",
	"displayName": "unimag",
	"version": 1,
 	"definition": "svyphonegap/unimag/unimag.js",
	"libraries": [],
	"model":
	{
 	},
 	"api":
 	{
	   	"getReaderTypes": 
	   	{
	    	"parameters": [],
			"returns" : "object"				
		},
		"activate": 
	   	{
	    	"parameters":
	    	[
	    	{"name":"success", "type":"function"},
	    	{"name":"error", "type":"function"}
	    	]
		},
		"deactivate": 
	   	{
	    	"parameters":
	    	[
	    	{"name":"success", "type":"function"},
	    	{"name":"error", "type":"function"}
	    	]
		},
		"swipe": 
	   	{
	    	"parameters":
	    	[
	    	{"name":"success", "type":"function"},
	    	{"name":"error", "type":"function"}
	    	]
		},
		"enableLogs": 
	   	{
	    	"parameters":
	    	[
	    	{"name":"enable", "type":"boolean"},
	    	{"name":"success", "type":"function"},
	    	{"name":"error", "type":"function"}
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
		"fireEvent": 
	   	{
	    	"parameters":
	    	[
	    	{"name":"event", "type":"string"},
	    	{"name":"data", "type":"object"}
	    	]
		},
		"onEvent": 
	   	{
	    	"parameters":[	  
	    	{"name":"connectingCB", "type":"function"},
	    	{"name":"connectedCB", "type":"function"},
	    	{"name":"disconnectedCB", "type":"function"},
	    	{"name":"timeoutCB", "type":"function"},
	    	{"name":"swipe_processingCB", "type":"function"},
	    	{"name":"swipe_successCB", "type":"function"},
	    	{"name":"swipe_errorCB", "type":"function"},
	    	{"name":"connection_errorCB", "type":"function"},
	    	{"name":"xml_errorCB", "type":"function"},
	    	{"name":"autoconfig_completedCB", "type":"function"},
	    	{"name":"autoconfig_errorCB", "type":"function"}
	    	]
		}
 	}
}