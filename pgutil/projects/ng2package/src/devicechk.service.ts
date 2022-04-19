import { Injectable } from '@angular/core';
declare let navigator: any;

@Injectable()
export class devicechkService {

    constructor() {}


    isiPadOS() {
        const iPad = (navigator.userAgent.match(/(iPad)/) /* iOS pre 13 */ ||
            (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) /* iPad OS 13 */ );
        return iPad;
    }

}