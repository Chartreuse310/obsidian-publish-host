import {fs} from "./deps.ts";
import {routeApi} from "./router.ts";


Deno.serve((req: Request) => {
    const url = new URL(req.url)
    const accept = req.headers.get('Accept') || ""
    console.log(url)
    const {pathname} = url
    if (/^\/api\//.test(pathname)) {
        // /api/* 接口
        return routeApi(pathname, req)
    } else if (/^\/notes\//.test(pathname)) {
        // /notes/* 笔记文件
        // todo: 这里可以用来验证 md 的密码，优先级依次为 md密码 => site密码 => null
        return fs.serveDir(req, {
            fsRoot: "../../notes",
            urlRoot: "notes"
        })
    } else if (accept.includes("text/html")) {
        return fs.serveFile(req, '../frontend/index.html')
    } else {
        // 静态页面请求
        return fs.serveDir(req, {
            fsRoot: "../frontend/",
            quiet: true,
            showDirListing: false,
            showDotfiles: false,
        });
    }
});
