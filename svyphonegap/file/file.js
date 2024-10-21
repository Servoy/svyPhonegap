angular.module('svyphonegapFile', ['servoy']).factory("svyphonegapFile", function($services, $window) {
		var scope = $services.getServiceScope('svyphonegapFile');
		return {

			/**
			 * @param {String} fileName
			 * @param {String} fileType
			 * @param {String} dir
			 * @param {Function} [cb]
			 * @param {Function} [err]
			 * @properties={typeid:24,uuid:"5E1834FA-B7B5-4566-B9DC-12CB5F3D73CF"}
			 */
			openfile: function(fileName, fileType, dir, cb, err) {
				var pathToFile = cordova.file[dir] + fileName;

				cordova.plugins.fileOpener2.open(pathToFile, fileType, {
						error: function(e) {
							if (cb) $window.executeInlineScript(cb.formname, cb.script, [e]);
						},
						success: function(e) {
							if (err)
								$window.executeInlineScript(err.formname, err.script, [e]);
						},
					});
			},

			/**
			 * @param {String} fileName
			 * @param {String} dir
			 * @param {Function} [cb]
			 * @param {Function} [err]
			 * @properties={typeid:24,uuid:"5E1834FA-B7B5-4566-B9DC-12CB5F3D73CF"}
			 */
			readFromFile: function(fileName, dir, cb, err) {
				var pathToFile = cordova.file[dir] + fileName;
				window.resolveLocalFileSystemURL(pathToFile, function(fileEntry) {
						fileEntry.file(function(file) {
								var reader = new FileReader();
								reader.onloadend = function(e) {
									if (cb)
										$window.executeInlineScript(cb.formname, cb.script, [this.result]);
								};
								reader.readAsText(file);
							}, function(e) {
								if (err)
									$window.executeInlineScript(err.formname, err.script, [e]);
							});
					}, function(e) {
						if (err)
							$window.executeInlineScript(err.formname, err.script, [e]);
					});
			},
			/**
			 * @param {String} fileName
			 * @param {String} dir
			 * @param data
			 * @param {Function} [cb]
			 * @param {Function} [err]
			 * @properties={typeid:24,uuid:"A3078652-DF4B-4591-B4BD-54F85C573A19"}
			 */
			writeToFile: function(fileName, dir, data, cb, err) {

				if (!cordova.file) {
					console.log('File plugin not loaded..');
					return;
				}

				window.resolveLocalFileSystemURL(cordova.file[dir], function(directoryEntry) {
						directoryEntry.getFile(fileName, { create: true }, function(fileEntry) {
								fileEntry.createWriter(function(fileWriter) {
										fileWriter.onwriteend = function(e) {
											if (cb)
												$window.executeInlineScript(cb.formname, cb.script, []);

										};
										fileWriter.onerror = function(e) {
											if (err)
												$window.executeInlineScript(err.formname, err.script, [e]);
										};

										var binaryString;
										try {
											binaryString = window.atob(data.replace(/\r\n/g, '').replace(/\r\n/g, '').replace(/\r\n/g, ''));

											// Process the decoded string
										} catch (error) {
											if (error.name === 'InvalidCharacterError') {
												console.error('Invalid Base64 encoding:', data);
											} else {
												console.error('Unknown error:', error);
											}
										}

										// Create an array of bytes from the binary string
										var bytes = new Uint8Array(binaryString.length);
										for (var i = 0; i < binaryString.length; i++) {
											bytes[i] = binaryString.charCodeAt(i);
										}
										var blob = new Blob([bytes]);
										fileWriter.write(blob);
									}, function(e) {
										if (err)
											$window.executeInlineScript(err.formname, err.script, [e]);
									});
							}, function(e) {
								if (err)
									$window.executeInlineScript(err.formname, err.script, [e, cordova.file[dir]]);
							});
					}, function(e) {
						if (err)
							$window.executeInlineScript(err.formname, err.script, [e]);
					});

			}
		}
	}).run(function($rootScope, $services) { })