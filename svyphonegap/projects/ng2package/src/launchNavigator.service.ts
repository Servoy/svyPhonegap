import { Injectable } from '@angular/core';
declare let launchnavigator: any;

@Injectable()
export class launchNavigatorService {

    constructor() {}

    launchNavigator(address) {
        try {
            launchnavigator.navigate(address);

        } catch (e) {
            window.alert('error opening link' + e.message);
        }
    }

}