angular.module('svyphonegapFile', ['servoy']).factory("svyphonegapFile", function($services) {
    var scope = $services.getServiceScope('svyphonegapFile');
    return {

        /**
         * @param {String} fileName
         * @param {String} dir
         * @param {Function} [cb]
         * @param {Function} [err]
         * @properties={typeid:24,uuid:"5E1834FA-B7B5-4566-B9DC-12CB5F3D73CF"}
         */
        readFromFile: function(fileName, dir, cb, err) {
            Bridge.executeMethod(readFromFile, null, [fileName, dir, cb, err]);

            function readFromFile(fileName, dir, cb, err) {
                var pathToFile = cordova.file[dir] + fileName;
                window.resolveLocalFileSystemURL(pathToFile, function(fileEntry) {
                    fileEntry.file(function(file) {
                        var reader = new FileReader();
                        reader.onloadend = function(e) {
                            cb(JSON.parse(this.result));
                        };
                        reader.readAsText(file);
                    }, function(e) {
                        err(e);
                    });
                }, function(e) {
                    err(e);
                });
            }
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
            Bridge.executeMethod(writeToFile, null, [fileName, dir, data, cb, err]);

            function writeToFile(fileName, dir, data, cb, err) {
                if (!cordova.file) {
                    console.log('File plugin not loaded..');
                    return;
                }
                data = JSON.stringify(data, null, '\t');

                window.resolveLocalFileSystemURL(cordova.file[dir], function(directoryEntry) {
                    directoryEntry.getFile(fileName, { create: true }, function(fileEntry) {
                        fileEntry.createWriter(function(fileWriter) {
                            fileWriter.onwriteend = function(e) {
                                cb();
                            };
                            fileWriter.onerror = function(e) {
                                err(e);
                            };
                            var blob = new Blob([data], { type: 'text/plain' });
                            fileWriter.write(blob);
                        }, function(e) {
                            err(e);
                        });
                    }, function(e) {
                        err(e);
                    });
                }, function(e) {
                    err(e);
                });
            }

        }
    }
}).run(function($rootScope, $services) {})