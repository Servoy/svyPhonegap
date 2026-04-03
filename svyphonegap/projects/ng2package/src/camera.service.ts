import { Injectable } from '@angular/core';
import { ServoyPublicService } from '@servoy/public';
declare let cordova: any;
declare let device: any;
declare let Camera: any;
declare let navigator: any;

@Injectable()
export class cameraService {
    constructor(private servoyService: ServoyPublicService) {}

  private helperCB(cb, d) {
    function safeBase64Decode(input) {
							if (!input || typeof input !== "string") return null;

							// 1. Clean: remove whitespace & convert URL-safe chars
							var cleaned = input.replace(/[\r\n\t ]+/g, "")// remove whitespace
							.replace(/-/g, "+")// URL-safe fix
							.replace(/_/g, "/"); // URL-safe fix

							// 2. Padding: Base64 length must be divisible by 4
							var padNeeded = cleaned.length % 4;
							if (padNeeded > 0) {
								cleaned += "===".substring(padNeeded);
							}
							return cleaned;
						}
    if (cb) {
      if (d.indexOf('base64,') != -1) {
        d = d.split('base64,')[1];
      }
      d = safeBase64Decode(d);
      cb(d);
    }
    }

    public getPicture(cb, errcb, options) {
        if (!options) {
            options = {
                quality: 50,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
                correctOrientation: true
            }
        }
        console.log("camera.getPicture called with options:", JSON.stringify(options));
        navigator.camera.getPicture(function(res) {
            console.log("getPicture success callback called");
            console.log("getPicture success - result type:", typeof res, "isArray:", Array.isArray(res));
            console.log("getPicture success - result:", res);
            // Handle multiple image selection (returns array)
            if (Array.isArray(res)) {
                console.log("Processing", res.length, "images");
                this.processImages(res, cb);
            } else {
                // Handle single image selection (returns single value)
                console.log("Processing single image");
                this.processImages([res], function(images) {
                    if (cb) {
                        cb(images[0]);
                    }
                });
            }
        }.bind(this), function(err) {
            console.error("getPicture error callback called");
            console.error("getPicture error:", err);
            if (errcb) {
                this.helperCB(errcb, err);
            }
        }.bind(this), options);

    }

    private processImages(images: string[], cb: (result: any) => void) {
        const results: any[] = [];
        let completed = 0;

        if (images.length === 0) {
            if (cb) cb(results);
            return;
        }

        images.forEach((image, index) => {
            if (image.startsWith("content://") || image.startsWith("file://")) {
                // Convert content URI to base64 using Cordova File API
                (window as any).resolveLocalFileSystemURL(image, (fileEntry: any) => {
                    fileEntry.file((file: any) => {
                        const reader = new FileReader();
                        reader.onloadend = () => {
                            const base64 = reader.result as string;
                            results[index] = this.processBase64Image(base64);
                            completed++;
                            if (completed === images.length && cb) {
                                cb(results);
                            }
                        };
                        reader.readAsDataURL(file);
                    });
                }, (err: any) => {
                    console.error('Error resolving content URI:', err);
                    results[index] = image; // Fallback to URI
                    completed++;
                    if (completed === images.length && cb) {
                        cb(results);
                    }
                });
            } else {
                // Already base64
                results[index] = this.processBase64Image(image);
                completed++;
                if (completed === images.length && cb) {
                    cb(results);
                }
            }
        });
    }

    private processBase64Image(data: string) {
        if (!data || typeof data !== "string") return null;

        // Return content/file URIs as-is
        if (data.startsWith("content://") || data.startsWith("file://")) {
            return data;
        }

        // Handle base64 data
        let cleaned = data;
        if (cleaned.indexOf('base64,') != -1) {
            cleaned = cleaned.split('base64,')[1];
        }
        cleaned = cleaned.replace(/[\r\n\t ]+/g, "")
            .replace(/-/g, "+")
            .replace(/_/g, "/");

        const padNeeded = cleaned.length % 4;
        if (padNeeded > 0) {
            cleaned += "===".substring(padNeeded);
        }

        return cleaned;
    }

    public isSupported() {
        return !!navigator.camera;
    }
}
