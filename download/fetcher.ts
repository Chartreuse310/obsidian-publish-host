// deno-lint-ignore-file no-explicit-any

import {get} from "./request.ts";
import * as fs from '@std/fs'
import * as path from '@std/path'
import {delay} from '@std/async'


async function fetchOptionsFile(id: string) {
    return await get(`https://publish-01.obsidian.md/options/${id}`).then(resp => resp.json())
}
async function fetchCacheFile(id: string) {
    return await get(`https://publish-01.obsidian.md/cache/${id}`).then(resp => resp.json())
}

// 下载网站的资源文件
async function downloadResourceFiles(id: string, siteCache: Record<string, any>, siteOptions: Record<string, any> = {}, onlyMarkdown = true) {
    const allFiles = Object.keys(siteCache).filter(filename => {
        if (onlyMarkdown) {
            return filename.endsWith('.md')
        } else {
            return true
        }
    })
    const total = allFiles.length
    const base = `https://publish-01.obsidian.md/access/${id}/`
    const root = path.resolve(`vaults/${siteOptions.siteName}-${id}`)

    let downloaded = 0
    async function downloadFile(filepath: string) {
        // 判断是否命中缓存
        if (fs.existsSync(path.join(root, filepath))) {
            console.log(`${++downloaded}/${total}(hit cache): ${filepath}`)
            return true
        }

        const directory = path.dirname(path.join(root, filepath))
        if (!fs.existsSync(directory)) {
            Deno.mkdirSync(directory, {recursive: true})
        }

        const resp = await get(base + filepath)
        if (resp.status !== 200) {
            throw new Error(`${resp.status}: ${resp.statusText}`)
        }

        const downloadItem = await Deno.open(path.join(root, filepath), { create: true, write: true })
        await resp.body?.pipeTo(downloadItem.writable)

        console.log(`${++downloaded}/${total}: ${filepath}`)
    }

    for (const filePath of allFiles) {
        const hitCache = await downloadFile(filePath)
        if (!hitCache) {
            await delay(100)
        }
    }

    // 写入 cache 和 options
    Deno.writeTextFileSync(path.join(root, '_options.json'), JSON.stringify(siteOptions, null, 2))
    Deno.writeTextFileSync(path.join(root, '_cache.json'), JSON.stringify(siteCache, null, 2))
}

async function start(ids: string | string[]) {
    if (!Array.isArray(ids)) {
        ids = [ids]
    }
    for (const id of ids) {
        const siteOptions = await fetchOptionsFile(id)
        const siteCache = await fetchCacheFile(id)
        await downloadResourceFiles(id, siteCache, siteOptions, false)
    }
}


await start([
    'f786db9fac45774fa4f0d8112e232d67',
    'caa27d6312fe5c26ebc657cc609543be',
])
