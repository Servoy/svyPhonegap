import { Injectable } from '@angular/core';
declare let device: any;

@Injectable()
export class deviceService {
    constructor() {}

    getDeviceInfoProperty(propertyName) {
        try {
            return device[propertyName];
        } catch (e) {
            console.error('error getting device info: ' + e.message);
            return []
        }
    }

    getDeviceInfo() {
        try {
            var props = ["cordova", "version", "platform", "model", "uuid"];
            var result = {};
            for (var i = 0; i < props.length; i++) {
                result[props[i]] = device[props[i]];
            }
            return [result];
        } catch (e) {
            console.error('error getting device info: ' + e.message);
            return [];
        }
    }

}