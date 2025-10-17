{
	"name": "svyphonegap-browser",
	"displayName": "browser",
	"version": 1,
 	"definition": "svyphonegap/browser/browser.js",
    "doc": "svyphonegap/browser/browser_doc.js",
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
		"openHrefTag": 
	   	{
	    	"parameters":
	    	[
		    	{
					"name":"url",
					"type":"string"
				}
			]
		}
 	}
}