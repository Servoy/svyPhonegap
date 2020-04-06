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
	    	{"name":"connecting", "type":"function"},
	    	{"name":"connected", "type":"function"},
	    	{"name":"disconnected", "type":"function"},
	    	{"name":"timeout", "type":"function"},
	    	{"name":"swipe_processing", "type":"function"},
	    	{"name":"swipe_success", "type":"function"},
	    	{"name":"swipe_error", "type":"function"},
	    	{"name":"connection_error", "type":"function"},
	    	{"name":"xml_error", "type":"function"},
	    	{"name":"autoconfig_completed", "type":"function"},
	    	{"name":"autoconfig_error", "type":"function"}
	    	]
		}
 	}
}