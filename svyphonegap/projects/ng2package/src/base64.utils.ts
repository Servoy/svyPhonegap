/**
 * Decode a base64 string, handling URL-safe encoding and padding.
 * Returns null for invalid input, the cleaned base64 string otherwise.
 */
export function safeBase64Decode(input: string): string | null {
    if (!input || typeof input !== "string") return null;

    // 1. Clean: remove whitespace & convert URL-safe chars
    var cleaned = input.replace(/[\r\n\t ]+/g, "")
        .replace(/-/g, "+")
        .replace(/_/g, "/");

    // 2. Padding: Base64 length must be divisible by 4
    var padNeeded = cleaned.length % 4;
    if (padNeeded > 0) {
        cleaned += "===".substring(padNeeded);
    }
    return cleaned;
}

/**
 * Process a callback with base64 image data.
 * Strips the 'base64,' prefix, decodes, and invokes the callback.
 * If decoding fails, invokes with null so the caller can handle it.
 */
export function processBase64Callback(cb: Function, data: string): void {
    if (!cb) return;
    if (data.indexOf('base64,') != -1) {
        data = data.split('base64,')[1];
    }
    cb(safeBase64Decode(data));
}
