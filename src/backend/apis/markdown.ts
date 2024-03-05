import {jsonResponse} from "../utils/index.ts";
import SITE_OPTIONS from "../options.ts";
import SITE_CACHE from "../cache.ts";


export function options(_: Request) {
    return jsonResponse(SITE_OPTIONS)
}

export function cache(_: Request) {
    return jsonResponse(SITE_CACHE)
}
