cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [{
            "id": "cordova-plugin-statusbar.statusbar",
            "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
            "pluginId": "cordova-plugin-statusbar",
            "clobbers": [
                "window.StatusBar"
            ]
        },
        {
            "id": "cordova-plugin-vibration.notification",
            "file": "plugins/cordova-plugin-vibration/www/vibration.js",
            "pluginId": "cordova-plugin-vibration",
            "merges": [
                "navigator"
            ]
        },
        {
            "id": "cordova-plugin-app-version.AppVersionPlugin",
            "file": "plugins/cordova-plugin-app-version/www/AppVersionPlugin.js",
            "pluginId": "cordova-plugin-app-version",
            "clobbers": [
                "cordova.getAppVersion"
            ]
        },
        {
            "id": "cordova-plugin-ionic-webview.IonicWebView",
            "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
            "pluginId": "cordova-plugin-ionic-webview",
            "clobbers": [
                "Ionic.WebView"
            ]
        },
        {
            "id": "cordova-plugin-ionic-webview.ios-wkwebview-exec",
            "file": "plugins/cordova-plugin-ionic-webview/src/www/ios/ios-wkwebview-exec.js",
            "pluginId": "cordova-plugin-ionic-webview",
            "clobbers": [
                "cordova.exec"
            ]
        },
        {
            "id": "cordova-plugin-ionic-keyboard.keyboard",
            "file": "plugins/cordova-plugin-ionic-keyboard/www/ios/keyboard.js",
            "pluginId": "cordova-plugin-ionic-keyboard",
            "clobbers": [
                "window.Keyboard"
            ]
        },
        {
            "id": "com.idtechproducts.uniMagPlugin",
            "file": "plugins/com.idtechproducts.uniMagPlugin/www/uniMagPlugin.js",
            "pluginId": "com.idtechproducts.uniMagPlugin",
            "clobbers": [
                "UniMag"
            ]
        },
        {
            "id": "phonegap-plugin-barcodescanner.BarcodeScanner",
            "file": "plugins/phonegap-plugin-barcodescanner/www/barcodescanner.js",
            "pluginId": "phonegap-plugin-barcodescanner",
            "clobbers": [
                "cordova.plugins.barcodeScanner"
            ]
        },
        {
            "id": "cordova-plugin-camera.Camera",
            "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
            "pluginId": "cordova-plugin-camera",
            "clobbers": [
                "Camera"
            ]
        },
        {
            "id": "cordova-plugin-camera.CameraPopoverOptions",
            "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
            "pluginId": "cordova-plugin-camera",
            "clobbers": [
                "CameraPopoverOptions"
            ]
        },
        {
            "id": "cordova-plugin-camera.camera",
            "file": "plugins/cordova-plugin-camera/www/Camera.js",
            "pluginId": "cordova-plugin-camera",
            "clobbers": [
                "navigator.camera"
            ]
        },
        {
            "id": "cordova-plugin-camera.CameraPopoverHandle",
            "file": "plugins/cordova-plugin-camera/www/ios/CameraPopoverHandle.js",
            "pluginId": "cordova-plugin-camera",
            "clobbers": [
                "CameraPopoverHandle"
            ]
        },
        {
            "id": "cordova-plugin-camera-preview.CameraPreview",
            "file": "plugins/cordova-plugin-camera-preview/www/CameraPreview.js",
            "pluginId": "cordova-plugin-camera-preview",
            "clobbers": [
                "CameraPreview"
            ]
        },
        {
            "id": "cordova-plugin-network-information.network",
            "file": "plugins/cordova-plugin-network-information/www/network.js",
            "pluginId": "cordova-plugin-network-information",
            "clobbers": [
                "navigator.connection",
                "navigator.network.connection"
            ]
        },
        {
            "id": "cordova-plugin-network-information.Connection",
            "file": "plugins/cordova-plugin-network-information/www/Connection.js",
            "pluginId": "cordova-plugin-network-information",
            "clobbers": [
                "Connection"
            ]
        },
        {
            "id": "cordova-plugin-networkinterface.networkinterface",
            "file": "plugins/cordova-plugin-networkinterface/www/networkinterface.js",
            "pluginId": "cordova-plugin-networkinterface",
            "clobbers": [
                "window.networkinterface"
            ]
        },
        {
            "id": "cordova-plugin-geolocation.Coordinates",
            "file": "plugins/cordova-plugin-geolocation/www/Coordinates.js",
            "pluginId": "cordova-plugin-geolocation",
            "clobbers": [
                "Coordinates"
            ]
        },
        {
            "id": "cordova-plugin-geolocation.PositionError",
            "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
            "pluginId": "cordova-plugin-geolocation",
            "clobbers": [
                "PositionError"
            ]
        },
        {
            "id": "cordova-plugin-geolocation.Position",
            "file": "plugins/cordova-plugin-geolocation/www/Position.js",
            "pluginId": "cordova-plugin-geolocation",
            "clobbers": [
                "Position"
            ]
        },
        {
            "id": "cordova-plugin-geolocation.geolocation",
            "file": "plugins/cordova-plugin-geolocation/www/geolocation.js",
            "pluginId": "cordova-plugin-geolocation",
            "clobbers": [
                "navigator.geolocation"
            ]
        },
        {
            "id": "cordova-plugin-file.DirectoryEntry",
            "file": "plugins/cordova-plugin-file/www/DirectoryEntry.js",
            "pluginId": "cordova-plugin-file",
            "clobbers": [
                "window.DirectoryEntry"
            ]
        },
        {
            "id": "cordova-plugin-file.DirectoryReader",
            "file": "plugins/cordova-plugin-file/www/DirectoryReader.js",
            "pluginId": "cordova-plugin-file",
            "clobbers": [
                "window.DirectoryReader"
            ]
        },
        {
            "id": "cordova-plugin-file.Entry",
            "file": "plugins/cordova-plugin-file/www/Entry.js",
            "pluginId": "cordova-plugin-file",
            "clobbers": [
                "window.Entry"
            ]
        },
        {
            "id": "cordova-plugin-file.File",
            "file": "plugins/cordova-plugin-file/www/File.js",
            "pluginId": "cordova-plugin-file",
            "clobbers": [
                "window.File"
            ]
        },
        {
            "id": "cordova-plugin-file.FileEntry",
            "file": "plugins/cordova-plugin-file/www/FileEntry.js",
            "pluginId": "cordova-plugin-file",
            "clobbers": [
                "window.FileEntry"
            ]
        },
        {
            "id": "cordova-plugin-file.FileError",
            "file": "plugins/cordova-plugin-file/www/FileError.js",
            "pluginId": "cordova-plugin-file",
            "clobbers": [
                "window.FileError"
            ]
        },
        {
            "id": "cordova-plugin-file.FileReader",
            "file": "plugins/cordova-plugin-file/www/FileReader.js",
            "pluginId": "cordova-plugin-file",
            "clobbers": [
                "window.FileReader"
            ]
        },
        {
            "id": "cordova-plugin-file.FileSystem",
            "file": "plugins/cordova-plugin-file/www/FileSystem.js",
            "pluginId": "cordova-plugin-file",
            "clobbers": [
                "window.FileSystem"
            ]
        },
        {
            "id": "cordova-plugin-file.FileUploadOptions",
            "file": "plugins/cordova-plugin-file/www/FileUploadOptions.js",
            "pluginId": "cordova-plugin-file",
            "clobbers": [
                "window.FileUploadOptions"
            ]
        },
        {
            "id": "cordova-plugin-file.FileUploadResult",
            "file": "plugins/cordova-plugin-file/www/FileUploadResult.js",
            "pluginId": "cordova-plugin-file",
            "clobbers": [
                "window.FileUploadResult"
            ]
        },
        {
            "id": "cordova-plugin-file.FileWriter",
            "file": "plugins/cordova-plugin-file/www/FileWriter.js",
            "pluginId": "cordova-plugin-file",
            "clobbers": [
                "window.FileWriter"
            ]
        },
        {
            "id": "cordova-plugin-file.Flags",
            "file": "plugins/cordova-plugin-file/www/Flags.js",
            "pluginId": "cordova-plugin-file",
            "clobbers": [
                "window.Flags"
            ]
        },
        {
            "id": "cordova-plugin-file.LocalFileSystem",
            "file": "plugins/cordova-plugin-file/www/LocalFileSystem.js",
            "pluginId": "cordova-plugin-file",
            "clobbers": [
                "window.LocalFileSystem"
            ],
            "merges": [
                "window"
            ]
        },
        {
            "id": "cordova-plugin-file.Metadata",
            "file": "plugins/cordova-plugin-file/www/Metadata.js",
            "pluginId": "cordova-plugin-file",
            "clobbers": [
                "window.Metadata"
            ]
        },
        {
            "id": "cordova-plugin-file.ProgressEvent",
            "file": "plugins/cordova-plugin-file/www/ProgressEvent.js",
            "pluginId": "cordova-plugin-file",
            "clobbers": [
                "window.ProgressEvent"
            ]
        },
        {
            "id": "cordova-plugin-file.fileSystems",
            "file": "plugins/cordova-plugin-file/www/fileSystems.js",
            "pluginId": "cordova-plugin-file"
        },
        {
            "id": "cordova-plugin-file.requestFileSystem",
            "file": "plugins/cordova-plugin-file/www/requestFileSystem.js",
            "pluginId": "cordova-plugin-file",
            "clobbers": [
                "window.requestFileSystem"
            ]
        },
        {
            "id": "cordova-plugin-file.resolveLocalFileSystemURI",
            "file": "plugins/cordova-plugin-file/www/resolveLocalFileSystemURI.js",
            "pluginId": "cordova-plugin-file",
            "merges": [
                "window"
            ]
        },
        {
            "id": "cordova-plugin-file.isChrome",
            "file": "plugins/cordova-plugin-file/www/browser/isChrome.js",
            "pluginId": "cordova-plugin-file",
            "runs": true
        },
        {
            "id": "cordova-plugin-file.iosFileSystem",
            "file": "plugins/cordova-plugin-file/www/ios/FileSystem.js",
            "pluginId": "cordova-plugin-file",
            "merges": [
                "FileSystem"
            ]
        },
        {
            "id": "cordova-plugin-file.fileSystems-roots",
            "file": "plugins/cordova-plugin-file/www/fileSystems-roots.js",
            "pluginId": "cordova-plugin-file",
            "runs": true
        },
        {
            "id": "cordova-plugin-file.fileSystemPaths",
            "file": "plugins/cordova-plugin-file/www/fileSystemPaths.js",
            "pluginId": "cordova-plugin-file",
            "merges": [
                "cordova"
            ],
            "runs": true
        },
        {
            "id": "cordova-plugin-inappbrowser.inappbrowser",
            "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
            "pluginId": "cordova-plugin-inappbrowser",
            "clobbers": [
                "cordova.InAppBrowser.open",
                "window.open"
            ]
        },
        {
            "id": "cordova-plugin-device.device",
            "file": "plugins/cordova-plugin-device/www/device.js",
            "pluginId": "cordova-plugin-device",
            "clobbers": [
                "device"
            ]
        },
        {
            "id": "cordova-plugin-fingerprint-aio.Fingerprint",
            "file": "plugins/cordova-plugin-fingerprint-aio/www/Fingerprint.js",
            "pluginId": "cordova-plugin-fingerprint-aio",
            "clobbers": [
                "Fingerprint"
            ]
        },
        {
            "id": "cordova-plugin-fcm-with-dependecy-updated-12.FCMPlugin",
            "file": "plugins/cordova-plugin-fcm-with-dependecy-updated-12/www/FCMPlugin.js",
            "pluginId": "cordova-plugin-fcm-with-dependecy-updated-12",
            "clobbers": [
              "FCM"
            ]
          },
        {
            "id": "cordova-plugin-screen-orientation.screenorientation",
            "file": "plugins/cordova-plugin-screen-orientation/www/screenorientation.js",
            "pluginId": "cordova-plugin-screen-orientation",
            "clobbers": [
                "cordova.plugins.screenorientation"
            ]
        },
        {
            "id": "cordova-plugin-actionsheet.ActionSheet",
            "file": "plugins/cordova-plugin-actionsheet/www/ActionSheet.js",
            "pluginId": "cordova-plugin-actionsheet",
            "clobbers": [
                "window.plugins.actionsheet"
            ]
        },
        {
            "id": "cordova-plugin-dialogs.notification",
            "file": "plugins/cordova-plugin-dialogs/www/notification.js",
            "pluginId": "cordova-plugin-dialogs",
            "merges": [
                "navigator.notification"
            ]
        },
        {
            "id": "uk.co.workingedge.phonegap.plugin.launchnavigator.Common",
            "file": "plugins/uk.co.workingedge.phonegap.plugin.launchnavigator/www/common.js",
            "pluginId": "uk.co.workingedge.phonegap.plugin.launchnavigator",
            "clobbers": [
                "launchnavigator"
            ]
        },
        {
            "id": "uk.co.workingedge.phonegap.plugin.launchnavigator.LocalForage",
            "file": "plugins/uk.co.workingedge.phonegap.plugin.launchnavigator/www/localforage.v1.5.0.min.js",
            "pluginId": "uk.co.workingedge.phonegap.plugin.launchnavigator",
            "clobbers": [
                "localforage"
            ]
        },
        {
            "id": "uk.co.workingedge.phonegap.plugin.launchnavigator.LaunchNavigator",
            "file": "plugins/uk.co.workingedge.phonegap.plugin.launchnavigator/www/ios/launchnavigator.js",
            "pluginId": "uk.co.workingedge.phonegap.plugin.launchnavigator",
            "merges": [
                "launchnavigator"
            ]
        },
        {
            "id": "cordova-plugin-printer.Printer",
            "file": "plugins/cordova-plugin-printer/www/printer.js",
            "pluginId": "cordova-plugin-printer",
            "clobbers": [
                "plugin.printer",
                "cordova.plugins.printer"
            ]
        },
        {
            "id": "cordova-plugin-qrscanner.QRScanner",
            "file": "plugins/cordova-plugin-qrscanner/www/www.min.js",
            "pluginId": "cordova-plugin-qrscanner",
            "clobbers": [
                "QRScanner"
            ]
        },
        {
            "id": "cordova-plugin-print-pdf.PrintPDF",
            "file": "plugins/cordova-plugin-print-pdf/www/PrintPDF.js",
            "pluginId": "cordova-plugin-print-pdf",
            "clobbers": [
                "window.PrintPDF"
            ]
        },
        {
            "id": "cordova-plugin-cleartext.CordovaPluginsCleartext",
            "file": "plugins/cordova-plugin-cleartext/www/CordovaPluginsCleartext.js",
            "pluginId": "cordova-plugin-cleartext",
            "clobbers": [
                "cordova.plugins.CordovaPluginsCleartext"
            ]
        },
        {
            "id": "cordova-plugin-local-notification-12.LocalNotification",
            "file": "plugins/cordova-plugin-local-notification-12/www/local-notification.js",
            "pluginId": "cordova-plugin-local-notification-12",
            "clobbers": [
              "cordova.plugins.notification.local"
            ]
          },
		 {
		      "id": "cordova-plugin-badge-fix.Badge",
		      "file": "plugins/cordova-plugin-badge-fix/www/badge.js",
		      "pluginId": "cordova-plugin-badge-fix",
		      "clobbers": [
		        "cordova.plugins.notification.badge"
		      ]
		    },
		    {
		        "id": "phonegap-plugin-mobile-accessibility.mobile-accessibility",
		        "file": "plugins/phonegap-plugin-mobile-accessibility/www/mobile-accessibility.js",
		        "pluginId": "phonegap-plugin-mobile-accessibility",
		        "clobbers": [
		          "window.MobileAccessibility"
		        ]
		      }
    ];
    module.exports.metadata = {
        "cordova-plugin-statusbar": "2.4.3",
        "cordova-plugin-vibration": "3.1.1",
        "cordova-plugin-whitelist": "1.3.4",
        "cordova-plugin-app-version": "0.1.9",
        "cordova-plugin-ionic-webview": "4.1.3",
        "cordova-plugin-ionic-keyboard": "2.2.0",
        "phonegap-plugin-barcodescanner": "8.1.0",
        "cordova-plugin-compat": "1.2.0",
        "cordova-plugin-camera": "2.4.1",
        "cordova-plugin-network-information": "1.3.4",
        "cordova-plugin-networkinterface": "2.0.0",
        "cordova-plugin-geolocation": "2.4.3",
        "cordova-plugin-file": "4.3.3",
        "it.innowatio.cordova.ios-fullscreen": "0.3.0",
        "cordova-plugin-inappbrowser": "1.7.2",
        "cordova-plugin-device": "1.1.7",
        "com.idtechproducts.uniMagPlugin": "2.1.0",
        "cordova-plugin-fingerprint-aio": "1.7.0",
        "cordova-plugin-fcm-with-dependecy-updated-12": "7.8.4",
        "cordova-plugin-local-notification-12": "0.1.3",
        "cordova-plugin-badge-fix": "0.8.10",
        "cordova-plugin-screen-orientation": "3.0.2",
        "cordova-plugin-actionsheet": "2.3.3",
        "cordova-plugin-dialogs": "2.0.2",
        "uk.co.workingedge.phonegap.plugin.launchnavigator": "5.0.4",
        "cordova-plugin-cleartext": "1.0.0",
        "cordova-plugin-printer": "0.7.3",
        "cordova-plugin-print-pdf": "4.0.2",
		"phonegap-plugin-mobile-accessibility": "1.0.9"
    };
});