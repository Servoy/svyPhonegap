{
	"name": "svyphonegap-barcode",
	"displayName": "barcode",
	"version": 1,
	"definition": "svyphonegap/barcode/barcode.js",
    "doc": "svyphonegap/barcode/barcode_doc.js",
	"ng2Config": 
	{
		"packageName": "@servoy/svyphonegap",
		"serviceName": "barcodeService",
		"entryPoint": "dist/servoy/ng2package"
	},

	"libraries": 
	[
		
	],

	"model": 
	{
		
	},

	"api": 
	{
		"scan": 
		{
			"parameters": 
			[
				{
					"name": "onSuccessCallbackMethod",
					"type": "function"
				},
				{
					"name": "onErrorCallbackMethod",
					"type": "function"
				},
				{
					"name": "options",
					"type": "object",
					"optional": true
				}
			]
		},

		"isSupported": 
		{
            "returns": "boolean"
		}
	}
}