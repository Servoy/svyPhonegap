import { Injectable } from '@angular/core';
declare let Keyboard: any;

@Injectable()
export class ionicService {
    constructor(){}
    showKeyboard() { Keyboard.show(); };
    hideKeyboard() { Keyboard.hide(); };
    isVisibleKeyboard(tp) { return Keyboard.isVisible; };
    setResizeModeKeyboard(tp) { Keyboard.setResizeMode(tp); };
    setKeyboardStyleKeyboard(tp) { Keyboard.setKeyboardStyle(tp); };
    disableScrollKeyboard(tp) { Keyboard.disableScroll(tp); }
}