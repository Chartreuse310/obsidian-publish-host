import {jsonResponse} from "../utils/index.ts";

export function options(_: Request) {
    return jsonResponse({
        "siteName": "cc's docs",
        "indexFile": "hello",
        "defaultTheme": "light",
        "showThemeToggle": true,
        "showHoverPreview": true,
        "strictLineBreaks": true,
        "showSearch": true,
        "showOutline": true,
        "showBacklinks": true
    })
}

export function cache() {
    return jsonResponse({
        "Recording 20240226150635.webm": null,
        "Recording 20240226133548.webm": null,
        "Recording 20240226133434.webm": null,
        "slide demo.md": {},
        "hello.md": {},
        "View.md": {},
        "Core Plugins/Untitled.md": {},
        "Core Plugins/Audio Recorder.md": {}
    })
}
