{
	"name": "svyphonegap-file",
	"displayName": "file",
	"version": 1,
	"definition": "svyphonegap/file/file.js",
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
		}
	}
}