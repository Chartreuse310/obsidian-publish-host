import { serveDir, serveFile } from "@std/http/file-server"
import {routeApi} from "./router.ts";


Deno.serve((req: Request) => {
    console.log(req.url)

    const url = new URL(req.url)
    const accept = req.headers.get('Accept') || ""
    const {pathname} = url

    if (/^\/api\//.test(pathname)) {
        // /api/* 接口
        return routeApi(pathname, req)
    } else if (accept.includes("text/html")) {
        return serveFile(req, 'src/frontend/index.html')
    } else {
        // 静态页面请求
        return serveDir(req, {
            fsRoot: "src/frontend",
            quiet: true,
            showDirListing: false,
            showDotfiles: false,
        });
    }
});
