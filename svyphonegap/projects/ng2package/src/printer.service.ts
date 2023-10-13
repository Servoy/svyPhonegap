import { Injectable } from '@angular/core';
import { ServoyPublicService } from '@servoy/public';
declare let cordova: any;
declare let window: any;

@Injectable()
export class printerService {
    constructor(private servoyService: ServoyPublicService) { }

    private helperCB(cb, d) {
        if (cb) {
            this.servoyService.executeInlineScript(cb.formname, cb.script, [d]);
        }
    }

    print(content, options, cb) {
        cordova.plugins.printer.print(content, options, function(r) {
            this.helperCB(cb, r)
        }.bind(this));
    }

    printPDF(content, cb) {
        window.plugins.PrintPDF.print({ 
            data: content,
            type: 'Data',
            title: 'PDF Print',
            success: function() {
                this.helperCB(cb, 'success')
            }.bind(this),
            error: function(data) {
                data = JSON.parse(data);
                this.helperCB(cb, 'failed: ' + data.error)
            }.bind(this)
        });
    }

    pick(options, cb) {
        cordova.plugins.printer.pick(options, function(r) {
            this.helperCB(cb, r);
        }.bind(this));
    }

}