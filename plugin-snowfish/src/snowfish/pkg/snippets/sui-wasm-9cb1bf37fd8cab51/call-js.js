import fs from "fs-extra";
import js_beautify from "js-beautify";

export class CallJs {
    constructor() {
    }

    mkdirpSync(dir) {
        if (!fs.existsSync(dir)) {
            fs.mkdirpSync(dir);
        }
    }

    writeFileSync(path, value, need_beautify) {
        if (need_beautify) {
            value = js_beautify(value);
        }
        fs.writeFileSync(path, value);
    }
}