import {options, cache, accessNote, pw} from "./apis/site.ts"
import {typeOf} from "./utils/index.ts";

type APIHandler = (req: Request) => Response | Promise<Response>

type APIRouteMatcher = string | RegExp

const routeConfig: Map<APIRouteMatcher, APIHandler> = new Map()
routeConfig.set('/api/site/options', options)
routeConfig.set('/api/site/cache', cache)
routeConfig.set(/^\/api\/access\//, accessNote)
routeConfig.set('/api/pw', pw)

/**
 * 处理前端api请求
 * @param api
 * @param req
 */
export function routeApi(api: string, req: Request) {
    for (const [key, handler] of routeConfig) {
        const type = typeOf(key)
        if (type === 'String' && api === key) {
            return handler(req)
        } else if (type === 'RegExp' && (key as RegExp).test(api)) {
            return handler(req)
        }
    }

    return new Response(null, {
        status: 502,
    })
}
