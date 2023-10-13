import { pushService } from './push.service';
import { printerService } from './printer.service';
import { phonegapOrientationService } from './phonegapOrientation.service';
import { phonegapService } from './phonegap.service';
import { networkinterfaceService } from './networkinterface.service';
import { locationService } from './location.service';
import { launchNavigatorService } from './launchNavigator.service';
import { ionicService } from './ionic.service';
import { fingerprintscanService } from './fingerprintscan.service';
import { fileService } from './file.service';
import { deviceService } from './device.service';
import { camerapreviewService } from './camerapreview.service';
import { cameraService } from './camera.service';
import { browserService } from './browser.service';
import { barcodeService } from './barcode.service';
 
import { NgModule } from '@angular/core';
 
@NgModule({
    declarations: [
    ],
    providers: [		
		pushService,
		printerService,
		phonegapOrientationService,
		phonegapService,
		networkinterfaceService,
		locationService,
		launchNavigatorService,
		ionicService,
		fingerprintscanService,
		fileService,
		deviceService,
		camerapreviewService,
		cameraService,
		browserService,
		barcodeService,],
    imports: [
    ],
    exports: [ 
      ]
})
export class svyphonegapModule {}