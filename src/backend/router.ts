import {cache, options} from "./apis/markdown.ts";

type APIHandler = (req: Request) => Response | Promise<Response>

const config: Record<string, APIHandler> = {
    '/api/options': options,
    '/api/cache': cache,
}

/**
 * 处理前端api请求
 * @param api
 * @param req
 */
export function routeApi(api: string, req: Request) {
    if (api in config) {
        return config[api](req)
    } else {
        return new Response(null, {
            status: 502,
        })
    }
}
