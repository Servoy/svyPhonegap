{
	"name": "svyphonegap-printer",
	"displayName": "printer",
	"version": 1,
 	"definition": "svyphonegap/printer/printer.js",
 	"ng2Config": {
       "packageName": "@servoy/svyphonegap",
       "serviceName": "printerService",
       "entryPoint": "dist/servoy/ng2package"
    },
	"libraries": [],
	"model": 
	{
		
	},

	"api": 
	{
		"print": 
		{
			"parameters": 
			[
				{
					"name": "content",
					"type": "string"
				},

				{
					"name": "options",
					"type": "object"
				},

				{
					"name": "callback",
					"type": "function"
				}
			]
		},
		
		"printPDF": 
		{
			"parameters": 
			[
				{
					"name": "content",
					"type": "string"
				},

				{
					"name": "callback",
					"type": "function"
				}
			]
		},

		"pickPrinter": 
		{
			"parameters": 
			[
				{
					"name": "options",
					"type": "object"
				},

				{
					"name": "callback",
					"type": "function"
				}
			]
		}
	}
}