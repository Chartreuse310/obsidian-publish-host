import {jsonResponse} from "../utils/index.ts";
import * as path from "@std/path"
import {format} from "@std/datetime/format"


const SiteOptions = {
    "siteName": "Developer Documentation",
    "indexFile": "Home",
    "defaultTheme": "system",
    "showThemeToggle": true,
    "showHoverPreview": true,
    "showSearch": true,
    "showOutline": true,
    "showBacklinks": true,
    "navigationOrdering": [
        "Plugins",
        "Plugins/Getting started",
        "Plugins/Getting started/Build a plugin.md",
        "Plugins/Getting started/Anatomy of a plugin.md",
        "Plugins/Getting started/Development workflow.md",
        "Plugins/Getting started/Mobile development.md",
        "Plugins/Getting started/Third-party tools.md",
        "Plugins/Getting started/Use React in your plugin.md",
        "Plugins/Getting started/Use Svelte in your plugin.md",
        "Plugins/User interface",
        "Plugins/Editor",
        "Plugins/Editor/Editor.md",
        "Plugins/Editor/Markdown post processing.md",
        "Plugins/Editor/Editor extensions.md",
        "Plugins/Editor/Decorations.md",
        "Plugins/Editor/State fields.md",
        "Plugins/Editor/State management.md",
        "Plugins/Editor/View plugins.md",
        "Plugins/Editor/Viewport.md",
        "Plugins/Editor/Communicating with editor extensions.md",
        "Plugins/Releasing",
        "Plugins/Releasing/Release your plugin with GitHub Actions.md",
        "Plugins/Releasing/Submit your plugin.md",
        "Plugins/Releasing/Submission requirements for plugins.md",
        "Plugins/Releasing/Plugin guidelines.md",
        "Plugins/Releasing/Beta-testing plugins.md",
        "Plugins/Events.md",
        "Plugins/Vault.md",
        "Themes",
        "Themes/Obsidian Publish themes/About Obsidian Publish themes.md",
        "Themes/Obsidian Publish themes/Build a Publish theme.md",
        "Themes/Obsidian Publish themes/Best practices for Publish themes.md",
        "Reference",
        "Assets",
        "Developer policies.md",
        "Home.md",
        "publish.css"
    ],
    "logo": "Assets/obsidian-lockup-docs.svg"
}

const vault = "Developer Documentation-caa27d6312fe5c26ebc657cc609543be"
// const vault = "Obsidian Help-f786db9fac45774fa4f0d8112e232d67"

const SiteCache = JSON.parse(Deno.readTextFileSync(`vaults/${vault}/cache.json`))

export function options(_req: Request) {
    return jsonResponse(SiteOptions)
}

export function cache(_req: Request) {
    return jsonResponse(SiteCache)
}

export function accessNote(req: Request) {
    let {pathname, origin} = new URL(req.url)

    const method = req.method.toUpperCase()
    const date = format(new Date(), 'yyyy-MM-dd HH:mm:ss')
    const reqUrl = req.url.replace(new RegExp('^' + origin), "")
    console.log(`[${date}] [${method}] ${reqUrl}`)

    pathname = decodeURIComponent(pathname)

    // 去加载对应资源文件并返回
    const file = Deno.readFileSync(path.join(`vaults/${vault}/${pathname.replace(/^\/api\/access\//, '')}`))

    let contentType = 'text/html; charset=utf-8'
    if (pathname.endsWith('svg')) {
        contentType = 'image/svg+xml'
    } else if (pathname.endsWith('.jpg') || pathname.endsWith('.jpeg')) {
        contentType = 'image/jpeg'
    } else if (pathname.endsWith('.png')) {
        contentType = 'image/png'
    } else if (pathname.endsWith('.gif')) {
        contentType = 'image/gif'
    } else if (pathname.endsWith('.css')) {
        contentType = 'text/css; charset=UTF-8'
    } else if (pathname.endsWith('.js')) {
        contentType = 'application/javascript; charset=UTF-8'
    } else if (pathname.endsWith('.md')) {
        contentType = 'text/markdown; charset=utf-8'
    } else if (pathname.endsWith('.ico')) {
        contentType = 'image/x-icon'
    }

    return new Response(file, {
        status: 200,
        headers: {
            "Access-Control-Allow-Origin": "http://localhost:63341",
            "Access-Control-Allow-Credentials": "true",
            "Content-Type": contentType,
        }
    })
}

export function pw(_req: Request) {
    return jsonResponse({hpw: '123456'})
}
