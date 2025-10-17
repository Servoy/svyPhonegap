{
	"name": "svyphonegap-file",
	"displayName": "file",
	"version": 1,
	"definition": "svyphonegap/file/file.js",
    "doc": "svyphonegap/file/file_doc.js",
	"ng2Config": 
	{
		"packageName": "@servoy/svyphonegap",
		"serviceName": "fileService",
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
		"writeToFile": 
		{
			"parameters": 
			[
				{
					"name": "fileName",
					"type": "string"
				},

				{
					"name": "dir",
					"type": "string"
				},

				{
					"name": "data",
					"type": "string"
				},

				{
					"name": "callbackSuccess",
					"type": "function"
				},

				{
					"name": "callbackError",
					"type": "function"
				}
			]
		},

		"readFromFile": 
		{
			"parameters": 
			[
				{
					"name": "fileName",
					"type": "string"
				},

				{
					"name": "dir",
					"type": "string"
				},

				{
					"name": "callbackSuccess",
					"type": "function"
				},

				{
					"name": "callbackError",
					"type": "function"
				}
			]
		},
		
		"openfile": 
		{
			"parameters": 
			[
				{
					"name": "fileName",
					"type": "string"
				},
				
				{
					"name": "fileType",
					"type": "string"
				},

				{
					"name": "dir",
					"type": "string"
				},

				{
					"name": "callbackSuccess",
					"type": "function"
				},

				{
					"name": "callbackError",
					"type": "function"
				}
			]
		},
		"saveToGallery": 
		{
			"parameters": 
			[				
				{
					"name": "imgData",
					"type": "string"
				},

				{
					"name": "galleryFolder",
					"type": "string"
				},

				{
					"name": "callbackSuccess",
					"type": "function"
				},

				{
					"name": "callbackError",
					"type": "function"
				}
			]
		}
	}
}