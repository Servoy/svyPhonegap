var AdmZip = require('adm-zip');

// creating archives
var zip = new AdmZip();

zip.addLocalFolder("./push/","/push/");
zip.addLocalFolder("./printer/","/printer/");
zip.addLocalFolder("./phonegapOrientation/","/phonegapOrientation/");
zip.addLocalFolder("./phonegap/","/phonegap/");
zip.addLocalFolder("./networkinterface/","/networkinterface/");
zip.addLocalFolder("./location/","/location/");
zip.addLocalFolder("./launchNavigator/","/launchNavigator/");
zip.addLocalFolder("./ionic/","/ionic/");
zip.addLocalFolder("./fingerprintscan/","/fingerprintscan/");
zip.addLocalFolder("./file/","/file/");
zip.addLocalFolder("./device/","/device/");
zip.addLocalFolder("./camerapreview/","/camerapreview/");
zip.addLocalFolder("./camera/","/camera/");
zip.addLocalFolder("./browser/","/browser/");
zip.addLocalFolder("./barcode/","/barcode/");
zip.addLocalFolder("./META-INF/", "/META-INF/");
zip.addLocalFolder("./dist/servoy/ng2package/", "/dist/servoy/ng2package/");
// add here all ng1 components/services 
//zip.addLocalFolder("./mycomponent/", "/mycomponent/");

zip.writeZip("svyphonegap.zip"); 