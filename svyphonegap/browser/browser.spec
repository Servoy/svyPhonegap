{
	"name": "svyphonegap-browser",
	"displayName": "browser",
	"version": 1,
 	"definition": "svyphonegap/browser/browser.js",
 	"ng2Config": {
       "packageName": "@servoy/svyphonegap",
       "serviceName": "browserService",
       "entryPoint": "dist/servoy/ng2package"
    },
	"libraries": [],
	"model":{},
 	"api":
 	{
	  	"openExternalLink": 
	   	{
	    	"parameters":
	    	[
		    	{
					"name":"url",
					"type":"string"
				}
			]
		},
		"openPhone": 
	   	{
	    	"parameters":
	    	[
		    	{
					"name":"phone",
					"type":"string"
				}
			]
		}
 	}
}