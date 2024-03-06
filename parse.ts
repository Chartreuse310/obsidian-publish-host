import {parseHeadings} from "./src/backend/parser/index.ts";

const cache: Record<string, any> = {}

function iterateDir(dir: string, cache: Record<string, any>) {
    const items = Deno.readDirSync(dir)
    for (const item of items) {
        const name = `${dir}/${item.name}`
        if (item.isFile) {
            const key = name.replace(/^vault\//, '')
            if (name.endsWith('.md')) {
                cache[key] = {
                    headings: parseHeadings(Deno.readTextFileSync(name))
                }
            } else {
                cache[key] = null
            }
        } else if (item.isDirectory) {
            iterateDir(name, cache)
        }
    }
}

iterateDir('vault', cache)

const cacheFileContent = `export default ${JSON.stringify(cache)}`
Deno.writeTextFileSync('src/backend/cache.ts', cacheFileContent)
console.log('网站cache已生成，现在可以本地启动预览或者上传github发布')
